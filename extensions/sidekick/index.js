const {api, type, Extension} = require('scratch-extension');
class ExtensionSidekick extends Extension {
    onInit() {

        api.addCategory({
            categoryId: 'sidekick.category',
            messageId: 'sidekick.category',
            color: '#b6d597'
        });

        api.addBlock({
            opcode: 'sidekick.returnvalue',
            type: type.BlockType.REPORTER,
            messageId: 'sidekick.returnvalue',
            categoryId: 'sidekick.category',
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'MOIN!'
                }
            },
            function: args => this.ReturnValue(args.VALUE)
        });

        api.addBlock({
            opcode: 'sidekick.helloworld',
            type: type.BlockType.COMMAND,
            messageId: 'sidekick.helloworld',
            categoryId: 'sidekick.category',
            function: args => this.HelloWorld()
        });
    }
    onUninit() {
        api.removeCategory('sidekick.category');
        // api.removeInstance('sidekick');
        
    }
    ReturnValue(VALUE) {
        return VALUE;
    }
    HelloWorld() {
        console.log("MOIN!");
        alert("MOIN!");
    }
}
module.exports = ExtensionSidekick;