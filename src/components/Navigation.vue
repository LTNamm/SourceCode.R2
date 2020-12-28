
<template>
  <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">

  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="../assets/masking_icon.png" width="50" height="50" class="d-inline-block align-top" alt="" loading="lazy">
    <img src="../assets/masking_title.png" width="300" height="30" class="d-inline-block align-top" alt="" loading="lazy">
    </a>
       
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav justify-content-end">
          <div class="btn-group">
            <button type="button" class="btn btn-light">Các dự án</button>
            <button type="button" class="btn btn-light">Mẫu</button>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    
  name: 'Navigation',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
