<?php    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
        die();
    }

    function mungXML($xml)
    {
        $obj = SimpleXML_Load_String($xml);
        if ($obj === FALSE) return $xml;

        $nss = $obj->getNamespaces(TRUE);
        if (empty($nss)) return $xml;

        $nsm = array_keys($nss);
        foreach ($nsm as $key)
        {
            $rgx
            = '#'               
            . '('               
            . '\<'              
            . '/?'              
            . preg_quote($key)  
            . ')'               
            . '('               
            . ':{1}'            
            . ')'               
            . '#'               
            ;
            $rep
            = '$1'          
            . '_'           
            ;
            $xml =  preg_replace($rgx, $rep, $xml);
        }
        return $xml;
    }
    if(isset($_GET["q"]) && $_GET["q"] != ""){
        $q = str_replace(" ", "+", trim($_GET["q"]));
        $plainXML = mungXML( trim(file_get_contents("http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=QueryByName&name=$q")));
        $crcind = json_encode(SimpleXML_Load_String($plainXML, 'SimpleXMLElement', LIBXML_NOCDATA), JSON_PRETTY_PRINT);
        $crcind = json_encode(json_decode($crcind, true)["SOAP-ENV_Body"]["QueryByNameResponse"]["QueryByNameResult"]["diffgr_diffgram"]["QueryByName_DataSet"], JSON_PRETTY_PRINT);
        print_r($crcind);
    }else{
        echo "";
    }
    
?>