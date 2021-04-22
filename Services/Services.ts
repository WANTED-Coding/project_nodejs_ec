import AuthService from "./Auth.Services"

interface IServices{
  createServices:Function
}

export class Services implements IServices{
  createServices(type:string){
    if(type==='Auth')
      return new AuthService()
    return null
  }
}