import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocusMember } from './locus-member.entity';

@Entity({
  name: 'rnc_locus',
})
export class Locus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'assembly_id' })
  assemblyId: string;

  @Column({ name: 'locus_name' })
  locusName: string;

  @Column({ name: 'public_locus_name' })
  publicLocusName: string;

  @Column({ name: 'chromosome' })
  chromosome: string;

  @Column({ name: 'strand' })
  strand: string;

  @Column({ name: 'locus_start' })
  locusStart: string;

  @Column({ name: 'locus_stop' })
  locusStop: string;

  @Column({ name: 'member_count' })
  memberCount: string;

  @OneToMany(() => LocusMember, (locusMember) => locusMember.locus)
  locusMembers: LocusMember[];

  constructor(data?: Partial<Locus>) {
    this.id = data?.id;
    this.assemblyId = data?.assemblyId;
    this.locusName = data?.locusName;
    this.publicLocusName = data?.publicLocusName;
    this.chromosome = data?.chromosome;
    this.strand = data?.strand;
    this.locusName = data?.locusName;
    this.locusStop = data?.locusStop;
    this.memberCount = data?.memberCount;
    this.locusMembers = data?.locusMembers;
  }
}
