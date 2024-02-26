import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Locus } from './locus.entity';

@Entity({
  name: 'rnc_locus_members',
})
export class LocusMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'urs_taxid' })
  ursTaxId: string;

  @Column({ name: 'region_id' })
  regionId: string;

  @ManyToOne(() => Locus, (locus) => locus.id)
  @JoinColumn({ name: 'locus_id' })
  locus: Locus;

  @Column({ name: 'membership_status' })
  membershipStatus: string;

  constructor(data?: Partial<LocusMember>) {
    this.id = data?.id;
    this.ursTaxId = data?.ursTaxId;
    this.regionId = data?.regionId;
    this.locus = data?.locus;
    this.membershipStatus = data?.membershipStatus;
    this.regionId = data?.regionId;
  }
}
