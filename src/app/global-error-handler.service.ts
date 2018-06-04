import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
	
	constructor(private injector: Injector) { 
	}

	handleError(error) {
    //const loggingService = this.injector.get(LoggingService);
    const message = error.message ? error.message : error.toString();

    console.log(message);

    throw error;
  }
  
}