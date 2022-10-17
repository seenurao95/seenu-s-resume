const openProjectButtons = document.querySelectorAll('[data-project-target]')
const closeProjectButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const project = document.querySelector(button.dataset.projectTarget)
        openProject(project)
    })
})

closeProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const project = button.closest('.project')
        closeProject(project)
    })
})


function openProject(project) {
    if (project == null) return
    project.classList.add('active')
    overlay.classList.add('active')
}

function closeProject(project) {
    if (project == null) return
    project.classList.remove('active')
    overlay.classList.remove('active')
}