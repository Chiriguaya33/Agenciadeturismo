document.addEventListener("DOMContentLoaded", () => {
    const flightTypeInputs = document.querySelectorAll(
        'input[name="flight-type"]'
    );
    const flightOptionsContainer = document.getElementById("flight-options");

    const roundTripOptions = `
        <div class="input-group">
            <input type="text" placeholder="Origen" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Destino" required>
        </div>
        <div class="input-group">
            <input type="date" placeholder="Fecha de ida" required>
        </div>
        <div class="input-group">
            <input type="date" placeholder="Fecha de vuelta" required>
        </div>
        <div class="input-group">
            <select required>
            <option value="" disabled selected>Pasajeros</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
        </div>
        <div class="input-group">
            <button type="submit">Buscar</button>
        </div>
    `;

    const oneWayOptions = `
        <div class="input-group">
            <input type="text" placeholder="Origen" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Destino" required>
        </div>
        <div class="input-group">
            <input type="date" placeholder="Fecha de ida" required>
        </div>
        <div class="input-group">
            <select required>
            <option value="" disabled selected>Pasajeros</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
        </div>  
        <div class="input-group">
            <button type="submit">Buscar</button>
        </div>
    `;

    const multiDestinationOptions = `
        <div class="input-group">
            <input type="text" placeholder="Origen" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Primer destino" required>
        </div>
        <div class="input-group">
            <input type="date" placeholder="Fecha de salida" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Segundo destino">
        </div>
        <div class="input-group">
            <input type="date" placeholder="Fecha de salida">
        </div>
        <div class="input-group">
            <select required>
            <option value="" disabled selected>Pasajeros</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
        </div>
        <div class="input-group">
            <button type="submit">Buscar</button>
        </div>
    `;

    function updateFlightOptions() {
        const selectedFlightType = document.querySelector(
            'input[name="flight-type"]:checked'
        ).value;
        if (selectedFlightType === "round-trip") {
            flightOptionsContainer.innerHTML = roundTripOptions;
        } else if (selectedFlightType === "one-way") {
            flightOptionsContainer.innerHTML = oneWayOptions;
        } else if (selectedFlightType === "multi-destination") {
            flightOptionsContainer.innerHTML = multiDestinationOptions;
        }
    }

    flightTypeInputs.forEach((input) => {
        input.addEventListener("change", updateFlightOptions);
    });

    // Initialize with the default selected option
    updateFlightOptions();
});
