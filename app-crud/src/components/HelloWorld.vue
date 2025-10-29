<template>
  <div class="container mt-4 text-center">
    <h1 class="text-primary mb-3">{{ msg }}</h1>

    <p class="lead">
      Bienvenido a tu proyecto <strong>Vue 3 + Bootstrap 5</strong>.<br>
      Usa las rutas o el menú para navegar entre las vistas del sistema.
    </p>

    <hr>

    <p class="text-muted">
      Proyecto: <strong>Login y CRUD con LocalStorage</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Aplicación Vue'
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
h1 {
  font-weight: bold;
}
a {
  color: #0d6efd;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
