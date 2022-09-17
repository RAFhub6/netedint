let commands = {
    "@imp": {
     params: [
        "package"
     ],
     description: "Imports a file, module or link"
    },
    "upkg": {
        params: [
            "package",
            "inner"
        ],
        description: "Use a package"
    },
    "tmp": {
     params: [
        "variable",
        "value"
     ],
     description: "Create a variable to use"
    }
}
function checkproc(cvar){
 let cmdvar = cvar
 try {
  if ("@imp" in cmdvar){
   param = cmdvar.replace(/(.*)@imp /,"");
   pkg = require(param)
   pakg = packages.param
   if (pkg==undefined){
     console.warn("neted: warn: " + pkg + "is not installed, importing from local packages")
     if (pakg==undefined){
      console.error("neted: error: local package does not exist")
      stop
     } else {
        console.log("neted: success: local package imported, use upkg " + param + " function to use module")
     }
   } else {
   console.log("neted: success: installed " + param)
   }
  } else if ("upkg" in cmdvar){
    param = cmdvar.replace(/(.*)upkg /,"");
    arg1 = param.split(/(?<=^\S+)\s/)
    if (arg1 in packages){
        console.log("neted: success: package found")
    } else {
      console.error("neted: error: package not found (are you trying to use node packages?)")
      stop
    }
  }
 } catch(error) {
    console.error("neted: error: unrecognizable error")
    stop
 }
}