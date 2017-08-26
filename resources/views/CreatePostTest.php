<?php

class CreatePostTest extends TestCase
{

    public function testStoresPostSuccessfully()
    {

        $post = factory(App\Post::class)->make();

        $this->post('/api/posts', [
            'name' => $post->name,
            'topic' => $post->topic,
        ])->seeApiSuccess()
        ->seeJsonObject('post')
        ->seeJson([
            'name' => $post->name,
            'topic' => $post->topic,
        ]);

        $this->seeInDatabase('posts', [
            'name' => $post->name,
            'topic' => $post->topic,
        ]);
    }

}