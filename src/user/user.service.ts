import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService{
    private readonly users = [
        {
            userId: 1,
            username: 'teste',
            password: '123',
        },
        {
            userId:2,
            username: 'admin',
            password: '123',
        },
        {
            userId:3,
            username: 'alefmeireles',
            password: '123',
        },
        {
            userId:3,
            username: 'eliaskosiski',
            password: '123',
        },
        {
            userId:3,
            username: 'gabrielbrune',
            password: '123',
        }      
    ];
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
