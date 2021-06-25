// So now we created app.js file 

function update() {
    // making a variable name idoc or any thing lets just give it idoc for now and then we are getting iframe
    var idoc = document.getElementById('iframe').contentWindow.document;
    idoc.open();
    // so whenver someone writes in our editor show the output in iframe :)
    idoc.write(editor.getValue());
    idoc.close();
}

function setupEditor() {
    // just getting our editor from ace.editor(editor)
    window.editor = ace.edit("editor");
    // setting monokai theme
    editor.setTheme("ace/theme/monokai");
    // html means we can code html, css and javascript right in the web ( we can also use cdn of any libraries)
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(
        // this is backquotes
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        </head>
        <body>
            
        </body>
        </html>
        `, 1);

        // Oops i have added extra 's' lol remove it
    editor.getSession().on('change', function() {
        update();
    })
    editor.focus();

    editor.setOptions({
        fontSize: "16pt",
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible: true,
        enableBasicAutoCompletetion: false,
        enableLiveAutocompletetion: false
    })

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
}

setupEditor();