<div class="container">
  <div class="masthead">
    <h3 class="text-muted">
      <a [routerLink]="['/']">RedBoxCl</a>
    </h3>
    <nav class="navbar navbar-light bg-faded rounded mb-3">
      <div class="navbar-toggleable-md collapse show" id="navbarCollapse" aria-expanded="true">
        <ul class="nav navbar-nav text-md-center justify-content-md-between">
          <li class="nav-item active">
            <a class="nav-link" href="#">New Release <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Horrow</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['about']">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DVD & Blu-Ray</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">DVD</a>
              <a class="dropdown-item" href="#">Blu-ray action</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>