
declare const window: any;
const {Entity, PrimaryGeneratedColumn, Column} = window.require('typeorm');

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
