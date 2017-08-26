<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ToDoListModel extends Model
{
	public $timestamps = false;
	
    protected $table = "ToDoList";
}
