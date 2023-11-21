<?php
namespace Movistar\Checkout\Model;
use Magento\Checkout\Model\ConfigProviderInterface;


Class CustomConfigProvider implements ConfigProviderInterface
{
    public function getConfig()
    {
        $config = [];
        $config["customData"] = "Esta es una berraca prueba";
        return $config;
    }

}