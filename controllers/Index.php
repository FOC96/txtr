<?php

class Index extends Controller{
    function __construct() {
        parent::__construct();
    }

    public function index(){
      if (Session::exist()) {
        $this->view->render('Principal','index',true);
      } else {
        $this->view->render($this,'index');
      }

    }
}
?>
