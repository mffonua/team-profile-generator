function employeeCard(employee) {
    if (employee.getRole()==='Engineer') {
        return `
        <div class="shadow col-3 m-2">
            <div>
                <h2 class="text-center bg-secondary text-light p-2">
                    ${employee.getName()}<br>
                    Engineer
                </h2>
                <p class="text-center border">ID: ${employee.getId()}</p>
                <p class="text-center border">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="text-center border">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>
            </div>
        </div>
        `
    } else if(employee.getRole()==='Intern'){
        return `
        <div class="shadow col-3 m-2">
            <div>
                <h2 class="text-center bg-success text-light p-2">
                    ${employee.getName()}<br>
                    Intern
                </h2>
                <p class="text-center border">ID: ${employee.getId()}</p>
                <p class="text-center border">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="text-center border">School: ${employee.getSchool()}</p>
            </div>
        </div>
        `
    } else {
        return;
    }
}