<?php

namespace App\Http\Controllers;

use App\ToDoListModel;
use App\Http\Requests;
use Illuminate\Http\Request;

class CreatePostController extends Controller
{
	public function create(Request $request)
	{	
		$this->validate($request, [
			'name'  => 'required',
		]);

		$post = new ToDoListModel;

		$post->name = $request->input('name');
		$post->active = 0;
		$post->save();

		return response()->success(compact('add'));
	}

	public function list(){
		$listToDo = ToDoListModel::all();

		return response()->success(['data'=>$listToDo]);
	}


	public function delete_name($id){
		echo $id;
		$obj = ToDoListModel::find($id);
		$obj->delete();

		$this->list();
	}

	public function checked($id){
		$obj = ToDoListModel::find($id);

		if($obj->active == 1){
			$obj->active = 0;
		} else{
			$obj->active = 1;
		}
		$obj->save();
		
		$this->list();
	}

}