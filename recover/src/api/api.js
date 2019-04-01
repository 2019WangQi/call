import http from "@/utils/http.js";

export const getNowMovie = ()=>http("get","/api/ajax/movieOnInfoList?token=");
export const getCommingMovie = ()=>http("get","/api/ajax/mostExpected?ci=140&limit=10&offset=0&token=");