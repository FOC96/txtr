<div class="sideSection">
    <!--  Side-->
    <div class="profileInfo">
        <!-- <img src="" alt="" class="userPicMain"> -->
        <h3 id="name">Cargando...</h3>
        <p id="surname">Cargando...</p>
    </div>
    <!-- <input type="search" id="searchInput"> -->
    <div class="menu">
        <a href="<?=URL?>Dashboard/myFolders"><img src="<?=IMG?>folder.svg" alt="">Mis carpetas</a>
        <a href="<?=URL?>Dashboard/myDocuments"><img src="<?=IMG?>file.svg" alt="">Mis documentos</a>
        <a href="<?=URL?>Dashboard/recent"><img src="<?=IMG?>recent.svg" alt="">Recientes</a>
        <a href="<?=URL?>Dashboard/shared"><img src="<?=IMG?>shared.svg" alt="">Mis compartidos</a>
        <a href="<?=URL?>Dashboard/sharedWithMe"><img src="<?=IMG?>shared.svg" alt="">Compartidos conmigo</a>
        <a href="<?=URL?>Dashboard/editProfile"><img src="<?=IMG?>user.svg" alt="">Mi perfil</a>
        <a href="<?=URL?>" onclick="logOut()"><img src="<?=IMG?>logOut.svg" alt="">Cerrar Sesión</a>
    </div>
</div>
<script>
console.log(localStorage.getItem("token"));
if(localStorage.getItem("token") == null){
    window.location.href = config.url;
}
</script>