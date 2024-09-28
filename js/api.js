
async function fetchTasks() {
    try {
      const response = await fetch("C:\Users\nicoa\OneDrive\Desktop\pag.coder-_-\json\tasks.json"); 
      if (!response.ok) {
        throw new Error('Error al cargar las tareas.');
      }
      const data = await response.json();
      tasks = data;
      renderTasks();
    } catch (error) {
      console.error('Hubo un problema con la petición fetch:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al cargar las tareas. Inténtalo más tarde.',
      });
    } finally {
      console.log('Intento de cargar tareas finalizado.');
    }
  }
  

  function saveTasks() {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      Swal.fire({
        icon: 'success',
        title: 'Tareas guardadas',
        text: 'Tus tareas han sido guardadas con éxito.',
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error('Hubo un problema al guardar las tareas:', error);
      Toastify({
        text: "Error al guardar las tareas.",
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
      }).showToast();
    }
  }
  

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      tasks = storedTasks;
      renderTasks();
    } else {
      fetchTasks(); 
    }

    loadTasks();


  }
  

  