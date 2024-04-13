import React, { useState } from 'react';
import { Button, Divider, Input, Notification, Typography } from '@douyinfe/semi-ui';
import { IconUser, IconKey, IconFeishuLogo } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';

const { Text }  = Typography;
const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<string>();
  const [password, setPassword] = useState<string>();

  const login = () => {
    if (account === 'admin' && password === '111111') {
      window.localStorage.setItem('isLogin', 'true');
      navigate('/');
    } else {
      Notification.error({title: '账号或密码错误'})
    }
  }
  return (
    <div className='p-8 flex flex-col gap-8' style={{ border: '1px solid var(--semi-color-border)', minWidth: '33%' }}>
      <span className='text-2xl font-bold'>登录</span>
      <Input
        className='h-10'
        prefix={<IconUser />}
        showClear
        placeholder={"请输入用户名"}
        onChange={(e) => setAccount(e)}
      />
      <Input
        className='h-10'
        prefix={<IconKey />}
        showClear
        placeholder={"请输入密码"}
        mode='password'
        onChange={(e) => setPassword(e)}
      />
      <div className='flex w-full justify-between'>
        <Text link={{ href: '/userCenter/register' }}>注册</Text>
        <Text link={{ href: 'https://semi.design/' }}>忘记密码</Text>
      </div>
      <Button type='primary' theme='solid' className='w-full h-10' onClick={login}>登录</Button>
      <Divider />
      <Button type='tertiary' className='w-full h-10' icon={<IconFeishuLogo />}>飞书登录</Button>
    </div>
  );
};
export default Login;
