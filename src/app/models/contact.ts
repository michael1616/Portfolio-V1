export class Contact {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;

    constructor(_id: number,
        _fullName: string,
        _email: string,
        _phoneNumber: string,
        _message: string,) {

        this.id = _id;
        this.fullName = _fullName;
        this.email = _email;
        this.phoneNumber = _phoneNumber;
        this.message = _message;

    }
}
