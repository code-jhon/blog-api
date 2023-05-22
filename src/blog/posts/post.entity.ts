import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface PostInterface {
  id: string;
  title: string;
  content: string;
}


@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}