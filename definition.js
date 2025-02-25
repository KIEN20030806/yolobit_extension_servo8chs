const StemKitColorBlock = '#88ff00';

Blockly.Blocks["servo_write_angle"] = {
  init: function () {
    this.jsonInit({
      colour: StemKitColorBlock,
      nextStatement: null,
      message0: Blockly.Msg.BLOCK_MOTIONKIT_SERVO_WRITE_MESSAGE0,
      tooltip: Blockly.Msg.BLOCK_MOTIONKIT_SERVO_WRITE_TOOLTIP,
      previousStatement: null,
      args0: [
        { type: "input_value", name: "angle", check: "Number" },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["S1", "0"],
            ["S2", "1"],
            ["S3", "2"],
            ["S4", "3"],
            ["S5", "0"],
            ["S6", "1"],
            ["S7", "2"],
            ["S8", "3"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'servo.png',
          "width": 30,
          "height": 30,
          "alt": "*",
          "flipRtl": false
        },
        { type: "input_value", name: "speed", check: "Number" },
        {type: "input_dummy"},
        {type: "input_dummy"},
      ],
      helpUrl: null,
    });
  },
};

Blockly.Python['servo_write_angle'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_servo8chs'] = 'from servo8chs import *';
  var value_output = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.set_servo_position("+ dropdown_pin + "," + value_output +", "+ value_speed+ ")\n";
  return code;
  
};


Blockly.Blocks["servo_micro_angle"] = {
  init: function () {
    this.jsonInit({
      colour: StemKitColorBlock,
      nextStatement: null,
      message0: Blockly.Msg.BLOCK_MOTIONKIT_SERVO_WRITE_MICRO_MESSAGE0,
      tooltip: Blockly.Msg.BLOCK_MOTIONKIT_SERVO_WRITE_MICRO_TOOLTIP,
      previousStatement: null,
      args0: [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "pin",
          "options": [
            ["S1", "0"],
            ["S2", "1"],
            ["S3", "2"],
            ["S4", "3"],
            ["S5", "0"],
            ["S6", "1"],
            ["S7", "2"],
            ["S8", "3"],
          ],
        },
        {
          "type": "field_image",
          "src": ImgUrl + 'servo.png',
          "width": 30,
          "height": 30,
          "alt": "*",
          "flipRtl": false
        },        
        {type: "input_dummy"},
      ],
      helpUrl: null,
    });
  },
};

Blockly.Python['servo_micro_angle'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_servo8chs'] = 'from servo8chs import *';
  var value_output = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.move_servo_position("+ dropdown_pin + "," + value_output + ")\n";
  return code;
  
};

Blockly.Blocks['servo360_write'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "servo360_write",
        "message0": Blockly.Msg.BLOCK_MOTIONKIT_SERVO360_WRITE_MESSAGE0,
        "tooltip": Blockly.Msg.BLOCK_MOTIONKIT_SERVO360_WRITE_TOOLTIP,
        "args0": [
          {
            type: "field_dropdown",
            name: "pin",
            options: [
              ["S1", "0"],
            ["S2", "1"],
            ["S3", "2"],
            ["S4", "3"],
            ["S5", "0"],
            ["S6", "1"],
            ["S7", "2"],
            ["S8", "3"],
            ],
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": ImgUrl + 'servo.png',
            "width": 30,
            "height": 30,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        colour: StemKitColorBlock
      }
    );
  }
};

Blockly.Python['servo360_write'] = function (block) {
  Blockly.Python.definitions_['import_yolo'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_motion_kit_motor'] = 'from motion_kit import *';
  var value_output = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = "sv.set_servo("+ dropdown_pin + "," + value_output + ")\n";
  return code;
};
