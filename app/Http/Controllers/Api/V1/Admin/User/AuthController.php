<?php


namespace App\Http\Controllers\Api\V1\Admin\User;


use App\Http\Controllers\Controller;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = [
            'name'=> $request->get('username'),
            'password'=>$request->get('password')
        ];
        if (Auth::once($credentials)) {
            $user = Auth::user();
            $success['token']  = $user->createToken('MyApp')->accessToken;
            $success['status'] = self::SUCCESS_STATUS;
            return response()->json(['result' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name'       => 'required',
            'email'      => 'required|email',
            'password'   => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input             = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user              = User::create($input);
        $success['token']  = $user->createToken('MyApp')->accessToken;
        $success['name']   = $user->name;
        return response()->json(['success' => $success], $this->successStatus);

    }

    public function username()
    {
        return 'name';
    }

}
