<?php


namespace App\Http\Controllers\Adminhtml\Api\V1\User;


use App\Http\Controllers\Controller;
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
        $mark = $request->get('mark','system');
        if (!Auth::once($credentials)){
            return response()->json(['error' => 'Unauthorised'], 401);
        }
        /**@var $user \App\Models\User\User*/
        $user = Auth::user();
        $tokenResult = $user->createToken($mark);
        $success['token']  = $tokenResult->accessToken;
        $success['expires_at'] = $tokenResult->token->expires_at->toDateTimeString();
        $success['status'] = 'success';
        return response()->json(['result' => $success],200);
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
