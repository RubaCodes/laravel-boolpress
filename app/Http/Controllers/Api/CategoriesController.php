<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Category;

class CategoriesController extends Controller
{
    public function index(){
        return response(Category::all());
    }

    public function show($slug){
        $category = Category::where('slug', $slug)->with('posts')->first();
        return response($category);
    }
}
