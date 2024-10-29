const exercisecontainer = document.querySelector(".exercisecontainer");
const AddExercise = document.querySelector("#AddExercise");

var ind = 0; // Initialize the exercise index

AddExercise.addEventListener("click", () => {
    ind++; // Increment index when a new exercise is added

    const div = document.createElement("div");
    div.setAttribute("class", `card exercise shadow-sm mb-4`);
    div.style.border = "2px solid #007bff";
    div.style.borderRadius = "10px";
    div.style.width = "20rem";

    div.innerHTML = `
      <div class="card-body ">
        <h5 class="card-title text-center mb-3" style="font-weight: bold;">Exercise ${ind + 1}</h5>
        <select required name="Exercises[${ind}][muscle]" class="form-select form-select-lg mb-3" aria-label="Select Muscle Group">
          <option selected>Select Muscle Group</option>
           <option value="chest">Chest</option>
    <option value="biceps">Biceps</option>
    <option value="triceps">Triceps</option>
    <option value="shoulders">Shoulders</option>
    <option value="back">Back</option>
    <option value="abs">Abs</option>
    <option value="quads">Quads</option>
    <option value="hamstrings">Hamstrings</option>
    <option value="glutes">Glutes</option>
    <option value="calves">Calves</option>
    <option value="forearms">Forearms</option>
    <option value="neck">Neck</option>
    <option value="traps">Traps</option>
    <option value="lats">Lats</option>
    <option value="obliques">Obliques</option>
    <option value="cardio">Cardio</option>
        </select>
        <input required class="form-control form-control-lg mb-3" name="Exercises[${ind}][exercise]" type="text" placeholder="Enter Exercise...">
        <div class="setscontainer">
          <h6 class="text-muted mb-3">Sets</h6>
          <div class="set mb-3">
            <input class="form-control form-control-sm mb-2" name="Exercises[${ind}][sets][reps]" type="number" placeholder="Reps...">
            <input required class="form-control form-control-sm mb-2" name="Exercises[${ind}][sets][weight]" type="number" placeholder="Weight (kg)">
            <button class="btn btn-danger btn-sm deleteset" type="button">Remove Set</button>
          </div>
        </div>
        <button class="btn btn-primary btn-sm mt-3 addset" type="button">Add Another Set</button>
        <button class="btn btn-danger btn-sm mt-3 DeleteExercise" type="button">Remove Exercise</button>
      </div>
    `;
    exercisecontainer.appendChild(div); // Add new exercise card to container
});

exercisecontainer.addEventListener("click", (event) => {
    if (event.target.classList.contains('addset')) {
        const setsContainer = event.target.previousElementSibling;
        const div = document.createElement("div");

        div.setAttribute("class", "set mb-3");
        div.innerHTML = `
          <input class="form-control form-control-sm mb-2" name="Exercises[${ind}][sets][reps]" type="number" placeholder="Reps...">
          <input required class="form-control form-control-sm mb-2" name="Exercises[${ind}][sets][weight]" type="number" placeholder="Weight (kg)">
          <button class="btn btn-danger btn-sm deleteset" type="button">Remove Set</button>
        `;
        setsContainer.appendChild(div); // Add new set to sets container
    }

    if (event.target.classList.contains('deleteset')) {
        event.target.parentElement.remove(); // Delete individual set
    }

    if (event.target.classList.contains('DeleteExercise')) {
        event.target.closest('.exercise').remove(); // Delete entire exercise card
    }
});
