javascript:function addopen(e){var cid = e.data.authorExternalChannelId;if(e.data.authorExternalChannelId){e.querySelector("#author-photo").addEventListener("click",function(){window.open("https://youtube.com/channel/"+e.data.authorExternalChannelId,"_blank");});}}var chatframe = document.querySelector("#chatframe").contentDocument.querySelector("div.style-scope yt-live-chat-item-list-renderer div#items");Array.from(chatframe.children).forEach(e=>addopen(e));var mobs = new MutationObserver(function(list,obs){list.forEach(e=>e.addedNodes.forEach(e=>addopen(e)));});mobs.observe(chatframe,{childList:true});
