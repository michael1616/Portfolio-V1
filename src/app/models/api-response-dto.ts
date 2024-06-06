export class ApiResponseDTO {
    statusCode: number;
    isSuccess: boolean;
    errorMessages: string[];
    resultado: any;

    constructor(_statusCode: number,
        _isExitoso: boolean,
        _errorMessages: string[],
        _resultado: any) {


        this.statusCode = _statusCode;
        this.isSuccess = _isExitoso;
        this.errorMessages = _errorMessages;
        this.resultado = _resultado;


    }

}
