import { Injectable } from '@angular/core';
import { ConsoleService } from '../base/service/console.service';

@Injectable()
export class LoggerService {

  private enable:boolean = false;
  
  /**
   * enable表示是否可以使用
   * */ 
  constructor(enable:boolean,
    consoleService:ConsoleService) {
    this.enable = enable;
  }

  private exec(method:string,msg){
    if(this.enable){
      console.log("%c[LoggerService]:start...", "color:#673ab7");
      console[method](msg);
      console.log("%c[LoggerService]:ended...", "color:#673ab7");
    }
  }

  public log(msg){
    this.exec('log',msg);
  }

  public info(msg){
    this.exec('info',msg);
  }

  public debug(msg){
    this.exec('debug',msg);
  }

  public warn(msg){
    this.exec('warn',msg);
  }

  public error(msg){
    this.exec('error',msg);
  }

}
