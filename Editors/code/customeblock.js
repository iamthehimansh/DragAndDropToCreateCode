Blockly.Blocks["bgcolor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Background Color");
    this.appendValueInput("color")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Color");
    this.appendValueInput("name")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["timeout"] = {
  init: function () {
    this.appendDummyInput().appendField("set Time Out");
    this.appendStatementInput("funk")
      .setCheck(null);
      this.appendValueInput("sec")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sec");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["setinterval"] = {
  init: function () {
    this.appendDummyInput().appendField("Set Interval");
    this.appendStatementInput("funk");
      this.appendValueInput("sec")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sec");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["circle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Circle")
      .appendField(new Blockly.FieldNumber(0, 1), "size")
      .appendField("Border")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "border");
    this.appendValueInput("name")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Name");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["moveele"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Move Element Steps:")
      .appendField(new Blockly.FieldNumber(0), "steps");
    this.appendValueInput("to")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("To");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["bgcolor"] = function (block) {
    
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "name",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var colour_color = Blockly.JavaScript.valueToCode(
    block,
    "color",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById(${value_name}).style.background=${colour_color};`;

  return code;
};

Blockly.Python["bgcolor"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "name",
    Blockly.Python.ORDER_ATOMIC
  );
  var colour_color = Blockly.Python.valueToCode(
    block,
    "color",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `createcircle${value_name
    .replaceAll(" ", "")
    .replaceAll("-", "")
    .replaceAll("'", "")}.color=${value_name}`;

  return code;
};

Blockly.JavaScript["circle"] = function (block) {
  var number_size = block.getFieldValue("size");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "name",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var checkbox_name = block.getFieldValue("border") == "TRUE";

  // TODO: Assemble JavaScript into code variable.
  var code = `function createcircle${value_name
    .replaceAll(" ", "")
    .replaceAll("-", "")
    .replaceAll("'", "")}(){
        let cir=document.createElement("div")
        cir.classList.add("circle")
        cir.style.width="${number_size}px"
        cir.style.height="${number_size}px"
        cir.style.marginLeft="0px"

        cir.setAttribute("id",${value_name})
        ${checkbox_name ? 'cir.style.border="black solid 1px"' : ""}
        
        document.getElementById("UiWorkspace").appendChild(cir) 
    }
    createcircle${value_name
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll("'", "")}();
    `;

  return code;
};
Blockly.Python["circle"] = function (block) {
  var number_size = block.getFieldValue("size");
  var checkbox_border = block.getFieldValue("border") == "TRUE";
  var value_name = Blockly.Python.valueToCode(
    block,
    "name",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = `
    import circle from logincode.circle
    createcircle${value_name
      .replaceAll(" ", "")
      .replaceAll("-", "")
      .replaceAll("'", "")}=circle(${number_size})
    
    `;
  return code;
};
Blockly.JavaScript["moveele"] = function (block) {
  var number_steps = block.getFieldValue("steps");
  var value_to = Blockly.JavaScript.valueToCode(
    block,
    "to",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  let d = Date.now();
  var code = ` 
   window.mvd=()=>{
        let mydocument=document.getElementById(${value_to})
        if(!mydocument.steps){
            mydocument.style.marginLeft="${number_steps}px"
            mydocument.steps=${number_steps}
            console.log(mydocument)
            return null
        }else{
            mydocument.steps=(mydocument.steps+(${number_steps}))
            mydocument.style.marginLeft=mydocument.steps+'px'
            console.log("seted mopp")

        }
    }
    window.mvd()
    `;
  return code;
};

Blockly.JavaScript["timeout"] = function (block) {
    var number_sec = Blockly.JavaScript.valueToCode(
        block,
        "sec",
        Blockly.JavaScript.ORDER_ATOMIC
      );
  var statements_funk = Blockly.JavaScript.statementToCode(block, "funk");
  // TODO: Assemble JavaScript into code variable.
  var code = `setTimeout(()=>{${statements_funk}},${number_sec}*1000)
    `;

  return code;
};
Blockly.JavaScript["setinterval"] = function (block) {
    
  var number_sec = Blockly.JavaScript.valueToCode(
    block,
    "sec",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_funk = Blockly.JavaScript.statementToCode(block, "funk");
  // TODO: Assemble JavaScript into code variable.
  var code = `setInterval(()=>{${statements_funk}},${number_sec}*1000)
    `;

  return code;
};
