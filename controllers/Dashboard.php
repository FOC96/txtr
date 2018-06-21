<?php

class Dashboard extends Controller{
    function __construct() {
        parent::__construct();
    }

    public function index(){
        $this->view->render($this,'myDocuments');
    }

    public function editor(){
        $this->view->render($this,'editor');
    }

    public function editProfile(){
        $this->view->render($this,'editProfile');
    }

    public function insideFolder(){
        $this->view->render($this,'insideFolder');
    }

    public function myFolders(){
        $this->view->render($this,'myFolders');
    }
}
?>
