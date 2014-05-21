/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //alert('test');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
 /*   
    
    /*
     * Licensed to the Apache Software Foundation (ASF) under one
     * or more contributor license agreements.  See the NOTICE file
     * distributed with this work for additional information
     * regarding copyright ownership.  The ASF licenses this file
     * to you under the Apache License, Version 2.0 (the
     * "License"); you may not use this file except in compliance
     * with the License.  You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing,
     * software distributed under the License is distributed on an
     * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     * KIND, either express or implied.  See the License for the
     * specific language governing permissions and limitations
     * under the License.
     
    var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
            document.addEventListener('pause', this.onPause, false);
            document.addEventListener('resume', this.onResume, false);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicity call 'app.receivedEvent(...);'
        onDeviceReady: function() {
    		
            app.receivedEvent('deviceready');
            window.SocialShare = new SocialShare();
           
        },
        onPause: function() {
        	app.receivedEvent('pause');
        },
        onResume: function() {
        	app.receivedEvent('resume');
        },
        // Update DOM on a Received Event
/*        receivedEvent: function(id) {
    		if (id == 'deviceready')
            {
            	app.waveInit();
            	
            }
            
            if (id == 'pause')
        	{
        		app.wavePause();
        	}
        	
        	if (id == 'resume')
        	{
        		app.waveResume();
        	}
        },*/
/*        waveInit: function()
        {
            var elementWave = cordova.require("com.elementwave.ElementWave");
            
            elementWave.init("443580594c", "54c3f80b", "282390344980", function(retValue)
                             {
                             });
                             
            elementWave.resume(function()
            	{
            	});
        },
        wavePause: function()
        {
        	var elementWave = cordova.require("com.elementwave.ElementWave");
        	elementWave.pause(function()
        	{
        	});
        },
        waveResume: function()
        {
        	var elementWave = cordova.require("com.elementwave.ElementWave");
        	
        	elementWave.resume(function()
        	{
        	});
        }

    
    
    
};*/

function toggleVisible(id){
	var div_id = document.getElementById(id);
	div_id.style.display == 'block' ? div_id.style.display = 'none' : div_id.style.display = 'block';
	if(div_id.style.display == 'block') div_id.innerHTML='Login Form';
}