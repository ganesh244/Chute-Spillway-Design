<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chute Spillway Calculator</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <h1>Chute Spillway Calculator</h1>
        <form id="spillwayForm">
            <label for="c">Coefficient of Runoff:</label>
            <input type="number" id="c" step="0.01" required><br>

            <label for="i">Rainfall Intensity (cm/hr):</label>
            <input type="number" id="i" step="0.01" required><br>

            <label for="A">Catchment Area (hectares):</label>
            <input type="number" id="A" step="0.01" required><br>

            <label for="H">Depth over the flow over weir (meter):</label>
            <input type="number" id="H" step="0.01" required><br>

            <label for="h">Value of drop (meter):</label>
            <input type="number" id="h" step="0.01" required><br>

            <button type="submit">Calculate</button>
        </form>

        <div id="result" style="display: none;">
            <h2>Results</h2>
            <p>Peak Discharge Qpeak (m<sup>3</sup>/s): <span id="Qp"></span></p>
            <p>Length of Weir L (meters): <span id="L"></span></p>
            <p>Initial depth d1 (meters): <span id="d1"></span></p>
            <p>Froude Number Fr : <span id="Fr1"></span></p>
            <p>Sequent Depth d2 (meters): <span id="d2"></span></p>
            <p>Height of Chute/Floor Block (meters): <span id="X1"></span></p>
            <p>Basin Length (meters): <span id="Lb"></span></p>
            <p>Spacing of Floor Block from Upstream of Stilling Basin (meters): <span id="X3"></span></p>
            <p>Minimum Distance of Floor Block from Side Wall (meters): <span id="X4"></span></p>
            <p>Height of End Sill (meters): <span id="X5"></span></p>
            <p>Actual Tail Water Depth (meters): <span id="X13"></span></p>
            <p>Height of Side Wall and Wing Wall at Junction (meters): <span id="J"></span></p>
            <p>Freeboard (meters): <span id="FB"></span></p>
        </div>
    </div>

    <script src="./chute spillway.js"></script>
</body>
</html>
