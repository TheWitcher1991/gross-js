<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Gross-js test</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body {
                font: normal 16px/1.4 sans-serif;
            }
            #button {
                padding: 10px 20px;
                color: rgb(255, 255, 255);
                border: 0;
                background: rgb(255, 0, 0);
                border-radius: 3px;
                cursor: pointer;
                transition: all 0.2s;
                outline: none;
            }
            #button:hover {
                background: rgb(226, 0, 0);
            }
            .gross {
                margin: 20px 70px
            }
            .is-selected {
                background: rgb(0, 173, 255);
                color: rgb(255, 255, 255);
                text-align: center;
                font-size: 20px;
                max-width: 500px;
                padding: 20px;
                margin: 20px auto;
            }
        </style>
    </head>
    <body>

        <button id="button">Click me</button>
        <button id="button">Click me2</button>

        <div class="gross">Hello Gross-js</div>

        <div role="alert" class="text">Click me</div>

        <form style="margin: 30px 0" type="POST" action="">
            <input type="text" name="text" id="text">
            <input type="button" value="Send" id="submit">
        </form>

        <script src="./build/gross.js"></script>
        <script src="./test/script.js"></script>
    </body>
</html>

