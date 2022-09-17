const tmc = require("./tmc.js")
const scc = require("./scc.js")
const args = process.argv.slice(2);
const sccl = require("./scc.js")
const fs = require("fs");
let script = args[0]

function checkcmd(cmd){
 if (cmd in sccl.commands){
  sccl.checkproc(cmd)
 } else {
  console.error("neted: error: command is not valid (" + cmd + ")")
  stop
 }
}
const allFileContents = fs.readFileSync(script, 'utf-8');

allFileContents.split(/\r?\n/).forEach(line =>  {
  checkcmd(line)
});


