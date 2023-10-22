import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm'

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId

  @Column()
  email: string

  @Column()
  name: string

  @Column()
  date: Date
}
