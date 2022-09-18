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
    },
    "echo": {
      params: [
        "print",
        "variable"
      ],
      description: "Print text into the terminal or send it to variable"
    }
}
package = {}
npackage = {}
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
      sce = console.error("neted: error: local package does not exist")
      stop
     } else {
        console.log("neted: success: local package imported, use upkg " + param + " function to use module")
        npackage.pakg = pakg
     }
   } else {
   console.log("neted: success: installed " + param)
   }
  } else if ("upkg" in cmdvar){
    param = cmdvar.replace(/(.*)upkg /,"");
    arg1 = param.split(/(?<=^\S+)\s/)
    arg2 = arg1.split(/(?<=^\S+)\s/)
    if (arg1 in npackages){
        npackage.arg1.arg2()
    } else {
      sce = console.error("neted: error: package not found (are you trying to use node packages?)")
      stop
    }
  } else if ("tmp" in cmdvar){
    param = cmdvar.replace(/(.*)tmp /,"")
    arg1 = param.split(/(?<=^\S+)\s/)
    arg2 = arg1.split(/(?<=^\S+)\s/)
    let arg1
    arg1.value = arg2
    console.log()
  } else if ("echo" in cmdvar){
    param = cmdvar.replace(/(.*)echo /,"")
    if ("nof" in param){
      console.log(param.replace(/(.*)nof/,""))
    } else {
    console.log("program: " + param)
    }
  }
 } catch(error) {
    console.error(sce)
    stop
 }
}