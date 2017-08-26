<?php

use Illuminate\Database\Seeder;

class ToDoListSeed extends Seeder
{
	public function run()
	{
		$this->call(listSeeder::class);
	}
}


class listSeeder extends Seeder{
	public function run(){
		$data = array(
			array('name' => 'Apple', 'active' => '1'),
			array('name' => 'Samsung', 'active' => '0'),
			array('name' => 'Nokia','active' => '0'),
			array('name' => 'Sony', 'active' => '1'),
			array('name' => 'Master', 'active' => '0'),
		);
		DB::table('ToDoList')->insert($data);
	}
}
