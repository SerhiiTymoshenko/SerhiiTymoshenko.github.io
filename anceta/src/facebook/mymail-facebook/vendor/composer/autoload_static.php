<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita82ea4e4bfe3ea9788a5cf91588dff17
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita82ea4e4bfe3ea9788a5cf91588dff17::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita82ea4e4bfe3ea9788a5cf91588dff17::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
