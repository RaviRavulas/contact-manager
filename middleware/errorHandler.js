const {constants}=require("../constants")
const errorHandler=(err,req,res,next) => {
    const statusCode = res.statusCode? res.statusCode :500
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation error",message: err.message,stackTrace: err.stack})
        case constants.NOT_FOUND:
            res.json({title:"its not found",message: err.message,stackTrace: err.stack})
        case constants.FORBIDDEN:
            res.json({title:"forbidden",message: err.message,stackTrace: err.stack})
        case constants.UNAUTHORIZED:
            res.json({title:"unotherised",message: err.message,stackTrace: err.stack})
        case constants.SERVER_ERROR:
            res.json({title:"SERVER ERROR",message: err.message,stackTrace: err.stack})
        default:
            console.log("no errors")
            break

    }
    
}
module.exports = errorHandler;