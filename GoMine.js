'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[272], {
 97229 : function exports(compressorName, fileName, callback) {
   (window.__NEXT_P = window.__NEXT_P || []).push(["/game/expeditions", function() {
     return callback(64762);
   }]);
 },
 6300 : function register(event, fn, $) {
   $.d(fn, {
     u : function apiGenKey() {
       return result;
     }
   });
   var se = $(85893);
   var d = $(9590);
   var views = $(84441);
   var self = $(36673);
   var me = $(67294);
   var result = function init(options) {
     var exts = options.title;
     var bChildren = options.children;
     var previous = options.show;
     var readOnlyFn = options.canDismiss;
     var extname = options.onDismiss;
     var NRD = (0, me.useState)(false);
     var DemoView = NRD[0];
     var replace = NRD[1];
     return (0, me.useEffect)(function() {
       replace(previous);
     }, [previous]), DemoView ? (0, se.jsx)(views.M, {
       initial : true,
       exitBeforeEnter : true,
       onExitComplete : function unboxValue() {
         return null;
       },
       children : (0, se.jsx)(self.E.div, {
         className : "fixed overflow-auto custom-scrollbar top-0 right-0 w-screen h-screen bg-black bg-opacity-60 z-40",
         children : (0, se.jsx)(self.E.div, {
           initial : {
             y : -120,
             opacity : .5
           },
           animate : {
             y : 0,
             opacity : 1
           },
           exit : {
             opacity : 0,
             y : 1050
           },
           className : "relative max-w-screen-sm m-4 mx-auto mt-[5%] md:mt-[15%] text-white bg-gray-800 border border-gray-700 rounded-sm shadow-md",
           children : (0, se.jsxs)(se.Fragment, {
             children : [readOnlyFn && (0, se.jsx)(self.E.div, {
               className : "absolute flex justify-end top-4 right-4 z-30 ",
               children : (0, se.jsx)(self.E.button, {
                 whileHover : {
                   rotate : 90,
                   scale : 1.2,
                   transition : {
                     ease : "easeOut",
                     duration : .2
                   }
                 },
                 onClick : function writeSearchEntry() {
                   replace(false);
                   if (!(null === extname || void 0 === extname)) {
                     extname();
                   }
                 },
                 children : (0, se.jsx)(d.b2, {})
               })
             }), exts && (0, se.jsx)("h2", {
               className : "text-xl p-4",
               children : exts
             }), (0, se.jsx)(self.E.div, {
               className : "p-4",
               children : bChildren
             })]
           })
         })
       })
     }) : null;
   };
 },
 64762 : function init(p2, d, $) {
   function get(value, _, param, options, callback, type, data) {
     try {
       var setting = value[type](data);
       var key = setting.value;
     } catch (access_token) {
       return void param(access_token);
     }
     if (setting.done) {
       _(key);
     } else {
       Promise.resolve(key).then(options, callback);
     }
   }
   function map(e) {
     return function() {
       var change = this;
       var args = arguments;
       return new Promise(function(tags, prop) {
         function callback(ifLast) {
           get(key, tags, prop, callback, resume, "next", ifLast);
         }
         function resume(type) {
           get(key, tags, prop, callback, resume, "throw", type);
         }
         var key = e.apply(change, args);
         callback(void 0);
       });
     };
   }
   function debug(obj, key, value) {
     return key in obj ? Object.defineProperty(obj, key, {
       value : value,
       enumerable : true,
       configurable : true,
       writable : true
     }) : obj[key] = value, obj;
   }
   function update(query) {
     var i = 1;
     for (; i < arguments.length; i++) {
       var o = null != arguments[i] ? arguments[i] : {};
       var oKeys = Object.keys(o);
       if ("function" === typeof Object.getOwnPropertySymbols) {
         oKeys = oKeys.concat(Object.getOwnPropertySymbols(o).filter(function(key) {
           return Object.getOwnPropertyDescriptor(o, key).enumerable;
         }));
       }
       oKeys.forEach(function(k) {
         debug(query, k, o[k]);
       });
     }
     return query;
   }
   function render() {
     var options = (0, rotate.Z)(function(provider) {
       return {
         account : provider.account,
         currentDay : provider.currentDay
       };
     }, zones.Z);
     var account = options.account;
     var day = options.currentDay;
     var _ref = (0, tParentMatrix.b)(function(s) {
       return s;
     });
     var HAS_BOOLEAN_VALUE = _ref.playVideo;
     var callback = _ref.setRevalidate;
     var revalidate = _ref.revalidate;
     var result = (0, t.Q)(function(s) {
       return s;
     });
     var courseSections = result.fleets;
     var n = result.selectedFleet;
     var additionalDigits = result.selectedFleetId;
     var data = (0, ret.useState)();
     var chunk = data[0];
     var type = data[1];
     var localStorage = (0, ret.useState)();
     var web3 = localStorage[0];
     var debug = localStorage[1];
     var NRD = (0, ret.useState)();
     var $ = NRD[0];
     var fetch = NRD[1];
     var tiledImageTLs = (0, ret.useState)();
     var tiledImageTL = tiledImageTLs[0];
     var setTabID = tiledImageTLs[1];
     var b = (0, ret.useState)();
     var e = b[0];
     var br = b[1];
     var textDivs = (0, ret.useState)();
     var div = textDivs[0];
     var parseValuesHeader = textDivs[1];
     var timestampGenerator = (0, ret.useRef)(false);
     var tiledImageBoundsUpdatesNums = (0, ret.useState)(false);
     var tiledImageBoundsUpdatesNum = tiledImageBoundsUpdatesNums[0];
     var getElementById = tiledImageBoundsUpdatesNums[1];
     var el = (0, ret.useState)(void 0);
     var text = el[0];
     var f = el[1];
     var getPathForUnits = (0, ret.useCallback)(map(match().mark(function run() {
       var url;
       var data;
       var connection;
       var filename;
       var obj;
       var constructor;
       var num;
       return match().wrap(function(self) {
         for (;;) {
           switch(self.prev = self.next) {
             case 0:
               return self.next = 2, (0, sprite.bk)();
             case 2:
               if (url = self.sent, fetch(url), !account.length) {
                 self.next = 24;
                 break;
               }
               if (!n) {
                 self.next = 17;
                 break;
               }
               return self.next = 8, (0, sprite.Ch)(account, n.minePower, n.rank, n.level);
             case 8:
               data = self.sent;
               connection = data.connection;
               filename = data.minesData;
               type(filename);
               debug(connection);
               setTabID(filename.slice(1, filename.length).filter(function(canCreateDiscussions) {
                 return true === canCreateDiscussions.canBeMined;
               }).length);
               br(day > n.lastMineDay && n.contractUses > 0);
               self.next = 24;
               break;
             case 17:
               return self.next = 19, (0, sprite.Ch)(account);
             case 19:
               obj = self.sent;
               constructor = obj.connection;
               num = obj.minesData;
               type(num);
               debug(constructor);
               setTabID(num.slice(1, num.length).filter(function(canCreateDiscussions) {
                 return true === canCreateDiscussions.canBeMined;
               }).length);
             case 24:
             case "end":
               return self.stop();
           }
         }
       }, run);
     })), [account, n, courseSections]);
     (0, ret.useEffect)(function() {
       getPathForUnits();
     }, [getPathForUnits, account, revalidate, courseSections, n]);
     (0, ret.useEffect)(function() {
       map(match().mark(function run() {
         var idxLineStart;
         var idxLineEnd;
         return match().wrap(function(_context4) {
           for (;;) {
             switch(_context4.prev = _context4.next) {
               case 0:
                 if (!web3 || !$) {
                   _context4.next = 7;
                   break;
                 }
                 return _context4.next = 3, web3.eth.getBlockNumber();
               case 3:
                 return idxLineStart = _context4.sent, idxLineEnd = idxLineStart - 4e3, _context4.next = 7, $.cryptominesContract.getPastEvents("eventGoMine", {
                   filter : {
                     user : account
                   },
                   fromBlock : idxLineEnd,
                   toBlock : "latest",
                   address : account
                 }).then(map(match().mark(function parse(t) {
                   return match().wrap(function(context$5$0) {
                     for (;;) {
                       switch(context$5$0.prev = context$5$0.next) {
                         case 0:
                           parseValuesHeader(t.reverse().map(function(result) {
                             var data = result.returnValues;
                             var startRoll = data.roll;
                             var s = data.winChance;
                             var r = data.planet;
                             var value = data.reward;
                             return {
                               transactionHash : result.transactionHash,
                               roll : Number(startRoll),
                               winChance : Number(s),
                               planet : Number(r),
                               reward : parseFloat($.connection.utils.fromWei(value, "ether")).toFixed(axis.zo)
                             };
                           }));
                         case 1:
                         case "end":
                           return context$5$0.stop();
                       }
                     }
                   }, parse);
                 })));
               case 7:
               case "end":
                 return _context4.stop();
             }
           }
         }, run);
       }))();
     }, [account, $, web3]);
     (0, ret.useEffect)(function() {
       if (chunk && n && chunk[1].requiredFuel > n.fuel && !timestampGenerator.current) {
         timestampGenerator.current = true;
         e1.m.fire({
           title : "Not enough fuel",
           html : "Your selected fleet does not have enough fuel to start an expedition",
           icon : "warning",
           confirmButtonText : "Ok",
           showCloseButton : true
         }).then(function() {
           timestampGenerator.current = false;
         });
       }
     }, [chunk, n]);
     var error = map(match().mark(function next(elem) {
       return match().wrap(function(context$5$0) {
         for (;;) {
           switch(context$5$0.prev = context$5$0.next) {
             case 0:
               if (!$) {
                 context$5$0.next = 4;
                 break;
               }
               return f(void 0), context$5$0.next = 4, $.cryptominesContract.methods.goMine(Number(additionalDigits), Number(elem)).send({
                 from : account
               }).once("transactionHash", function() {
                 getElementById(true);
               }).on("error", function(animate_param) {
                 console.log(animate_param);
               }).then(function(canCreateDiscussions) {
                 var htmlWebPackPluginAssets = map(match().mark(function init(passedDatabaseTypes) {
                   var cells;
                   return match().wrap(function(_context4) {
                     for (;;) {
                       switch(_context4.prev = _context4.next) {
                         case 0:
                           if (!passedDatabaseTypes) {
                             _context4.next = 9;
                             break;
                           }
                           cells = map(match().mark(function start() {
                             var idxLineStart;
                             var idxLineEnd;
                             return match().wrap(function(_context4) {
                               for (;;) {
                                 switch(_context4.prev = _context4.next) {
                                   case 0:
                                     return _context4.next = 2, web3.eth.getBlockNumber();
                                   case 2:
                                     return idxLineStart = _context4.sent, idxLineEnd = idxLineStart - 100, _context4.next = 6, $.cryptominesContract.getPastEvents("eventGoMine", {
                                       filter : {
                                         user : account
                                       },
                                       fromBlock : idxLineEnd,
                                       toBlock : "latest",
                                       address : account
                                     }).then(map(match().mark(function init(t) {
                                       var spy;
                                       var self;
                                       var left;
                                       var right;
                                       var value;
                                       var additionalDigits;
                                       var PM2PID;
                                       var hash;
                                       return match().wrap(function(context$5$0) {
                                         for (;;) {
                                           switch(context$5$0.prev = context$5$0.next) {
                                             case 0:
                                               f(void 0);
                                               spy = t.reverse()[0];
                                               self = spy.returnValues;
                                               left = self.roll;
                                               right = self.winChance;
                                               value = self.reward;
                                               additionalDigits = Number(passedDatabaseTypes.events.eventGoMine.returnValues.experience) / 10;
                                               PM2PID = Number(passedDatabaseTypes.events.eventGoMine.returnValues.fleetLevel);
                                               hash = passedDatabaseTypes.events.eventGoMine.transactionHash;
                                               f({
                                                 status : Number(left) <= Number(right),
                                                 reward : $.connection.utils.fromWei(value, "ether"),
                                                 winChance : Number(right),
                                                 roll : Number(left),
                                                 exp : Number(additionalDigits),
                                                 fleetLevel : PM2PID,
                                                 txHash : hash
                                               });
                                               console.log({
                                                 status : Number(left) <= Number(right),
                                                 reward : $.connection.utils.fromWei(value, "ether"),
                                                 winChance : Number(right),
                                                 roll : Number(left),
                                                 exp : Number(additionalDigits),
                                                 fleetLevel : PM2PID,
                                                 txHash : hash
                                               });
                                               callback();
                                             case 9:
                                             case "end":
                                               return context$5$0.stop();
                                           }
                                         }
                                       }, init);
                                     })));
                                   case 6:
                                   case "end":
                                     return _context4.stop();
                                 }
                               }
                             }, start);
                           }));
                           _context4.prev = 2;
                           cells();
                           _context4.next = 9;
                           break;
                         case 6:
                           return _context4.prev = 6, _context4.t0 = _context4.catch(2), _context4.abrupt("return", (new Promise(function(_nextEventFunc) {
                             return setTimeout(_nextEventFunc, 500);
                           })).then(function() {
                             return cells();
                           }));
                         case 9:
                         case "end":
                           return _context4.stop();
                       }
                     }
                   }, init, null, [[2, 6]]);
                 }));
                 return function() {
                   return htmlWebPackPluginAssets.apply(this, arguments);
                 };
               }());
             case 4:
             case "end":
               return context$5$0.stop();
           }
         }
       }, next);
     }));
     return (0, se.jsxs)("div", {
       children : [(0, se.jsxs)(_deepAssign2.default, {
         children : [(0, se.jsx)("title", {
           children : "Mines | CryptoMines APP"
         }), (0, se.jsx)("meta", {
           name : "description",
           content : "Explore planets, earn $ETERNAL"
         })]
       }), (0, se.jsxs)("main", {
         className : "grid grid-flow-row gap-4",
         children : [div && (0, se.jsxs)("div", {
           className : "relative grid bg-gray-800 m-4 p-2 gap-2 max-h-48 custom-scrollbar overflow-auto round-md",
           children : [(0, se.jsx)("p", {
             className : "text-sm text-gray-300",
             children : "Your expedition history for the last 3h:"
           }), div.length ? (0, se.jsx)(_childNames, {
             results : div
           }) : (0, se.jsx)("span", {
             className : "text-white bg-gray-900 p-4 text-sm",
             children : " No events in the last 3h "
           })]
         }), (0, se.jsx)(metric.u, {
           show : tiledImageBoundsUpdatesNum,
           canDismiss : void 0 !== text,
           onDismiss : function acceptTheCall() {
             getElementById(false);
             callback();
           },
           children : text ? (0, se.jsx)(views.M, {
             children : (0, se.jsx)(initialArgValues, update({}, text))
           }) : (0, se.jsx)(se.Fragment, {
             children : (0, se.jsxs)("div", {
               className : "grid grid-flow-row justify-center text-center",
               children : [(0, se.jsxs)("svg", {
                 className : "ml-16",
                 viewBox : "0 0 160 160",
                 width : "160",
                 height : "160",
                 children : [(0, se.jsx)("circle", {
                   cx : "80",
                   cy : "80",
                   r : "50",
                   fill : "silver"
                 }), (0, se.jsx)("g", {
                   transform : " matrix(0.866, -0.5, 0.25, 0.433, 80, 80)",
                   children : (0, se.jsx)("path", {
                     d : "M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z",
                     fill : "#10b981",
                     children : (0, se.jsx)("animateTransform", {
                       attributeName : "transform",
                       type : "rotate",
                       from : "360 0 0",
                       to : "0 0 0",
                       dur : "1s",
                       repeatCount : "indefinite"
                     })
                   })
                 }), (0, se.jsx)("path", {
                   d : "M 50,0 A 50,50 0 0,0 -50,0Z",
                   transform : "matrix(0.866, -0.5, 0.5, 0.866, 80, 80)",
                   fill : "silver"
                 })]
               }), (0, se.jsx)("span", {
                 className : "p-4 font-bold text-2xl text-white",
                 children : "Expedition has started"
               }), (0, se.jsx)("p", {
                 children : "Please wait... "
               })]
             })
           })
         }), (0, se.jsxs)("div", {
           className : "grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-10 p-4 place-items-center",
           children : [(0, se.jsx)(artistTrack, {
             effect : "solid",
             backgroundColor : "black",
             multiline : true
           }), (0, se.jsxs)("div", {
             className : "grid grid-flow-row gap-4 rounded-md self-stretch place-items-center w-full bg-gray-800 p-4 text-white border border-gray-700 shadow-sm",
             children : [(0, se.jsx)("p", {
               className : "text-xl",
               children : "Current mine power"
             }), (0, se.jsxs)("span", {
               className : "mx-auto grid px-4 py-2 rounded-md bg-pink-600 font-bold",
               children : [null === n || void 0 === n ? void 0 : n.minePower, " MP"]
             }), (0, se.jsx)("p", {
               className : "text-sm text-gray-400",
               children : "Based on your mine power available right now."
             })]
           }), (0, se.jsxs)("div", {
             className : "grid grid-flow-row gap-4 rounded-md place-items-center w-full bg-gray-800 p-4 text-white border border-gray-700 shadow-sm",
             children : [(0, se.jsx)("p", {
               className : "text-xl",
               children : "Max planet"
             }), (0, se.jsxs)("span", {
               className : "mx-auto grid px-4 py-2 rounded-md bg-purple-600 font-bold",
               children : ["Planet ", tiledImageTL]
             }), (0, se.jsx)("p", {
               className : "text-sm text-gray-400",
               children : "Based on workers that can enter the mine right now."
             })]
           })]
         }), n && !e && (0, se.jsx)("div", {
           className : "grid grid-flow-row w-full p-4 md:w-1/2 xl:w-1/3 justify-center place-self-center border border-gray-700 rounded-md bg-gray-800",
           children : (0, se.jsxs)("div", {
             className : "grid grid-flow-row gap-4 text-gray-400 text-center",
             children : [n.contractUses > 0 ? (0, se.jsx)("p", {
               className : "text-red-500",
               children : "\ud83d\udc31\u200d\ud83d\udcbb Your Fleet is exhausted."
             }) : (0, se.jsx)("p", {
               className : "text-red-500",
               children : "\ud83d\udc31\u200d\ud83d\udcbb Your Fleet needs contract."
             }), (0, se.jsx)("span", {
               className : "flex self-center mx-auto p-2 bg-yellow-500",
               children : (0, se.jsx)($realtime.Pkj, {
                 size : 35,
                 className : "text-white fill-current"
               })
             }), (0, se.jsx)("p", {
               className : "text-sm",
               children : "Please wait until the daily reset at 00:00 UTC, check if the fleet is contracted as well."
             }), (0, se.jsx)("div", {
               className : "max-w-max mx-auto"
             })]
           })
         }), !n && (0, se.jsx)("div", {
           className : "grid grid-flow-row w-full p-4 md:w-1/2 xl:w-1/3 justify-center place-self-center border-l-4 border-red-600 rounded-md bg-gray-800",
           children : (0, se.jsxs)("div", {
             className : "grid grid-flow-row gap-4 text-gray-400 text-center",
             children : [(0, se.jsx)("p", {
               children : "Please select a Fleet before initializing an Expedition"
             }), (0, se.jsx)(h.z, {}), (0, se.jsx)("p", {
               className : "text-sm",
               children : "Fleets can be found on the top left area."
             })]
           })
         }), (0, se.jsx)($gBCRBottom.VerticalTimeline, {
           children : chunk && chunk.slice(1, chunk.length).map(function($scope, index) {
             var x = Number($scope.baseSuccessPercentage) / 10 + Number($scope.successBonusPerRank) / 10 + (n && n.minePower >= 1500 ? Number($scope.veteranGuildBonus) / 10 : 0);
             return (0, se.jsx)($gBCRBottom.VerticalTimelineElement, {
               contentArrowStyle : {
                 borderRightColor : "#374151"
               },
               icon : (0, se.jsx)(scores.qw, {
                 className : "w-4 h-4 text-purple-500 fill-current"
               }),
               iconStyle : {
                 color : "#000",
                 boxShadow : "1px 1px 1px #8b5cf6",
                 background : "rgba(31, 41, 55, var(--tw-bg-opacity))"
               },
               children : (0, se.jsxs)("div", {
                 className : "grid grid-flow-rows gap-4 bg-gray-700 p-4 rounded text-white",
                 children : [(0, se.jsx)("span", {
                   className : "text-3xl",
                   children : spot.qk[index + 1]
                 }), (0, se.jsxs)("div", {
                   className : "grid grid-flow-col justify-between",
                   children : [(0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       children : "Required MP"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [$scope.requiredMinePower, (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " MP"
                       })]
                     })]
                   }), (0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       children : "Fuel cost"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [$scope.requiredFuel, (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " Fuel"
                       })]
                     })]
                   }), (0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       children : "Experience gain"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [Number($scope.experience) / 10, (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " EXP"
                       })]
                     })]
                   })]
                 }), (0, se.jsx)("span", {
                   className : "absolute top-4 right-4 place-self-center self-stretch px-5 text-gray-800",
                   children : (0, se.jsx)("span", {
                     className : "text-center text-7xl md:text-6xl",
                     children : index + 1
                   })
                 }), (0, se.jsx)("video", {
                   className : "min-w-full",
                   poster : "".concat(axis.L4, "/planets/").concat(index + 1, ".png"),
                   autoPlay : HAS_BOOLEAN_VALUE,
                   loop : HAS_BOOLEAN_VALUE,
                   muted : true,
                   children : (0, se.jsx)("source", {
                     className : "min-w-full",
                     src : "".concat(axis.L4, "/planets/").concat(index + 1, ".mp4"),
                     type : "video/mp4"
                   })
                 }), (0, se.jsx)("div", {
                   className : "grid align-middle justify-center bg-gray-800 py-4 ",
                   children : (0, se.jsxs)("span", {
                     className : "grid grid-flow-row 2xl:grid-flow-col items-center text-4xl font-bold",
                     children : [(0, se.jsx)("span", {
                       className : "bg-gray-900 px-4 rounded-md",
                       children : x > Number($scope.maxSuccessPercentage / 10) ? "".concat(Number($scope.maxSuccessPercentage / 10).toFixed(1), "%") : "".concat(x, "%")
                     }), (0, se.jsx)("span", {
                       className : "font-normal text-2xl m-2",
                       children : " to earn"
                     }), (0, se.jsxs)("span", {
                       className : "bg-indigo-500 px-4 rounded-md",
                       children : [parseFloat(null === web3 || void 0 === web3 ? void 0 : web3.utils.fromWei($scope.totalReward, "ether")).toFixed(axis.zo), (0, se.jsx)("span", {
                         className : "ml-2",
                         children : "$ETL"
                       })]
                     })]
                   })
                 }), (0, se.jsxs)("div", {
                   className : "grid grid-flow-col justify-betwee n",
                   children : [(0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       children : "Base Success"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [Number($scope.baseSuccessPercentage / 10).toFixed(1), (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " %"
                       })]
                     })]
                   }), (0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       children : "Rank Bonus"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [Number($scope.successBonusPerRank) / 10, (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " %"
                       })]
                     })]
                   }), (0, se.jsxs)("div", {
                     children : [(0, se.jsx)("p", {
                       className : "text-xs",
                       "data-tip" : "Forever Veternals!",
                       children : "Veteran Bonus"
                     }), (0, se.jsxs)("span", {
                       className : "text-3xl font-bold",
                       children : [Number($scope.veteranGuildBonus) / 10, (0, se.jsx)("span", {
                         className : "font-normal text-xl",
                         children : " %"
                       })]
                     })]
                   })]
                 }), n && e && (0, se.jsx)(cd0.z, {
                   type : $scope.canBeMined && e && Number($scope.requiredFuel) <= Number(n.fuel) ? "primary" : "danger",
                   disabled : !$scope.canBeMined || !e || !(Number($scope.requiredFuel) <= Number(n.fuel)),
                   action : function setDriverStation() {
                     return $scope.canBeMined && e && Number($scope.requiredFuel) <= Number(n.fuel) && error(index + 1);
                   },
                   children : $scope.canBeMined && e && Number($scope.requiredFuel) <= Number(n.fuel) ? "Begin expedition" : Number($scope.requiredFuel) > Number(n.fuel) ? "Not enough fuel" : Number($scope.requiredMinePower) > n.minePower ? "Not enough MP" : "Cant go to expeditions"
                 })]
               })
             }, $scope);
           })
         })]
       })]
     });
   }
   $.r(d);
   $.d(d, {
     default : function createHeader() {
       return render;
     }
   });
   var browser = $(28520);
   var match = $.n(browser);
   var se = $(85893);
   var scores = $(9590);
   var result = $(83435);
   var obj = {
     src : "/_next/static/media/failed.b7bdb765.gif",
     height : 400,
     width : 400
   };
   var src = {
     src : "/_next/static/media/win_result.dd62f409.gif",
     height : 400,
     width : 400
   };
   var cd0 = $(40570);
   var inner = function onShow() {
     return (0, se.jsxs)("div", {
       className : "wrapper",
       children : [(0, se.jsx)("div", {
         className : "confetti-149"
       }), (0, se.jsx)("div", {
         className : "confetti-148"
       }), (0, se.jsx)("div", {
         className : "confetti-147"
       }), (0, se.jsx)("div", {
         className : "confetti-146"
       }), (0, se.jsx)("div", {
         className : "confetti-145"
       }), (0, se.jsx)("div", {
         className : "confetti-144"
       }), (0, se.jsx)("div", {
         className : "confetti-143"
       }), (0, se.jsx)("div", {
         className : "confetti-142"
       }), (0, se.jsx)("div", {
         className : "confetti-141"
       }), (0, se.jsx)("div", {
         className : "confetti-140"
       }), (0, se.jsx)("div", {
         className : "confetti-139"
       }), (0, se.jsx)("div", {
         className : "confetti-138"
       }), (0, se.jsx)("div", {
         className : "confetti-137"
       }), (0, se.jsx)("div", {
         className : "confetti-136"
       }), (0, se.jsx)("div", {
         className : "confetti-135"
       }), (0, se.jsx)("div", {
         className : "confetti-134"
       }), (0, se.jsx)("div", {
         className : "confetti-133"
       }), (0, se.jsx)("div", {
         className : "confetti-132"
       }), (0, se.jsx)("div", {
         className : "confetti-131"
       }), (0, se.jsx)("div", {
         className : "confetti-130"
       }), (0, se.jsx)("div", {
         className : "confetti-129"
       }), (0, se.jsx)("div", {
         className : "confetti-128"
       }), (0, se.jsx)("div", {
         className : "confetti-127"
       }), (0, se.jsx)("div", {
         className : "confetti-126"
       }), (0, se.jsx)("div", {
         className : "confetti-125"
       }), (0, se.jsx)("div", {
         className : "confetti-124"
       }), (0, se.jsx)("div", {
         className : "confetti-123"
       }), (0, se.jsx)("div", {
         className : "confetti-122"
       }), (0, se.jsx)("div", {
         className : "confetti-121"
       }), (0, se.jsx)("div", {
         className : "confetti-120"
       }), (0, se.jsx)("div", {
         className : "confetti-119"
       }), (0, se.jsx)("div", {
         className : "confetti-118"
       }), (0, se.jsx)("div", {
         className : "confetti-117"
       }), (0, se.jsx)("div", {
         className : "confetti-116"
       }), (0, se.jsx)("div", {
         className : "confetti-115"
       }), (0, se.jsx)("div", {
         className : "confetti-114"
       }), (0, se.jsx)("div", {
         className : "confetti-113"
       }), (0, se.jsx)("div", {
         className : "confetti-112"
       }), (0, se.jsx)("div", {
         className : "confetti-111"
       }), (0, se.jsx)("div", {
         className : "confetti-110"
       }), (0, se.jsx)("div", {
         className : "confetti-109"
       }), (0, se.jsx)("div", {
         className : "confetti-108"
       }), (0, se.jsx)("div", {
         className : "confetti-107"
       }), (0, se.jsx)("div", {
         className : "confetti-106"
       }), (0, se.jsx)("div", {
         className : "confetti-105"
       }), (0, se.jsx)("div", {
         className : "confetti-104"
       })]
     });
   };
   var _childNames = function init(data) {
     var tweets = data.results;
     return (0, se.jsx)(se.Fragment, {
       children : tweets.map(function(self) {
         var text = Number(self.roll) <= Number(self.winChance);
         return (0, se.jsxs)("div", {
           className : "flex flex-wrap gap-2 items-center text-white bg-gray-700 p-1",
           children : [(0, se.jsx)("span", {
             className : "bg-gray-800 p-1",
             children : text ? (0, se.jsx)(scores.At, {
               className : "h-4 w-4 text-green-500"
             }) : (0, se.jsx)(scores.b2, {
               extraClass : "h-4 w-4 text-red-500"
             })
           }), (0, se.jsxs)("span", {
             children : ["\ud83c\udfb2 You roll: ", (self.roll / 10).toFixed(1)]
           }), "|", (0, se.jsxs)("span", {
             children : ["\ud83c\udfc6 You needed: ", (self.winChance / 10).toFixed(1), " or below"]
           }), "|", (0, se.jsxs)("span", {
             children : ["\ud83c\udf0d Planet ", self.planet]
           }), "|", (0, se.jsxs)("span", {
             className : "flex items-center",
             children : [(0, se.jsx)(scores.IF, {
               className : "w-4 h-4 text-indigo-400 fill-current mr-1"
             }), " ", self.reward, " $ETERNAL"]
           }), (0, se.jsx)("a", {
             className : "text-indigo-500",
             target : "_blank",
             href : "https://bscscan.com/tx/".concat(self.transactionHash, "#eventlog"),
             rel : "noreferrer",
             children : "\ud83d\udd10 See transaction"
           })]
         }, self.transactionHash);
       })
     });
   };
   var metric = $(6300);
   var h = $(54246);
   var e1 = $(63614);
   var sprite = $(82645);
   var t = $(61947);
   var tParentMatrix = $(57130);
   var rotate = $(95867);
   var axis = $(15129);
   var spot = $(3438);
   var $realtime = $(23149);
   var views = $(84441);
   var self = $(36673);
   var History_1 = $(5152);
   var _deepAssign2 = $(9008);
   var ShapeMaker_1 = $(25675);
   var ret = $(67294);
   var $gBCRBottom = $(14313);
   var zones = $(60374);
   var artistTrack = (0, History_1.default)(function() {
     return $.e(735).then($.bind($, 38735));
   }, {
     loadableGenerated : {
       webpack : function unboxValue() {
         return [38735];
       },
       modules : ["game/expeditions.tsx -> react-tooltip"]
     },
     ssr : false
   });
   var initialArgValues = function render(options) {
     var type = options.status;
     var n = options.reward;
     var cacheSize = options.winChance;
     var frequency = options.roll;
     var right = options.exp;
     var grid = options.fleetLevel;
     var path = options.txHash;
     var classes = type ? "bg-green-500 text-black border border-green-900" : "bg-red-500 text-black border border-red-900";
     return (0, se.jsxs)("div", {
       className : "grid grid-flow-row gap-4 font-bold justify-center",
       children : [(0, se.jsx)("div", {
         className : "w-72 h-80 mx-auto center",
         children : type ? (0, se.jsx)(ShapeMaker_1.default, {
           alt : "Mine expedition succeded",
           src : src
         }) : (0, se.jsx)(ShapeMaker_1.default, {
           alt : "Mine expedition failed",
           src : obj
         })
       }), (0, se.jsx)(self.E.div, {
         initial : {
           scale : .7,
           opacity : 0
         },
         animate : {
           scale : 1,
           opacity : 1
         },
         transition : {
           delay : .5
         },
         className : "p-4 rounded-full ".concat(classes, " flex justify-center"),
         children : (0, se.jsx)("p", {
           children : type ? "\ud83c\udf89 Expedition succeeded!" : " \u274c Expedition failed!"
         })
       }), type && (0, se.jsxs)(self.E.div, {
         initial : {
           scale : .7,
           opacity : 0
         },
         animate : {
           scale : 1,
           opacity : 1
         },
         transition : {
           delay : .6
         },
         className : "flex gap-4 my-6 justify-center text-4xl",
         children : [(0, se.jsx)(ShapeMaker_1.default, {
           width : "29",
           height : "35",
           src : result.Z,
           alt : ""
         }), parseFloat(n).toFixed(axis.zo), type ? (0, se.jsx)(inner, {}) : null]
       }), (0, se.jsxs)("div", {
         className : "grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 self-center items-center",
         children : [(0, se.jsxs)(self.E.div, {
           initial : {
             x : -20,
             opacity : 0
           },
           animate : {
             x : 0,
             opacity : 1
           },
           transition : {
             delay : .6
           },
           className : "flex flex-row justify-center rounded-md shadow-md p-4 bg-gray-900 ",
           children : [(0, se.jsx)("span", {
             role : "img",
             children : "\ud83c\udfb2 "
           }), (0, se.jsxs)("p", {
             children : ["Your roll: ", (frequency / 10).toFixed(1)]
           })]
         }), (0, se.jsxs)(self.E.div, {
           initial : {
             x : 20,
             opacity : 0
           },
           animate : {
             x : 0,
             opacity : 1
           },
           transition : {
             delay : .6
           },
           className : "flex flex-row justify-center rounded-md shadow-md p-4 bg-gray-900",
           children : [(0, se.jsx)("span", {
             role : "img",
             children : "\ud83c\udfc6 "
           }), (0, se.jsxs)("p", {
             children : ["Needed: ", (cacheSize / 10).toFixed(1), " or below"]
           })]
         })]
       }), (0, se.jsxs)("div", {
         className : "grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 self-center items-center",
         children : [(0, se.jsxs)(self.E.div, {
           initial : {
             x : -20,
             opacity : 0
           },
           animate : {
             x : 0,
             opacity : 1
           },
           transition : {
             delay : .6
           },
           className : "flex flex-row justify-center rounded-md shadow-md p-4 bg-gray-900 ",
           children : [(0, se.jsx)("span", {
             role : "img",
             children : " \ud83d\udcd4"
           }), (0, se.jsxs)("p", {
             children : ["Experience received: ", right]
           })]
         }), (0, se.jsxs)(self.E.div, {
           initial : {
             x : 20,
             opacity : 0
           },
           animate : {
             x : 0,
             opacity : 1
           },
           transition : {
             delay : .6
           },
           className : "flex flex-row justify-center rounded-md shadow-md p-4 bg-gray-900",
           children : [(0, se.jsx)("span", {
             role : "img",
             children : "\ud83d\ude80 "
           }), (0, se.jsxs)("p", {
             children : ["Fleet Level: ", grid]
           })]
         })]
       }), (0, se.jsx)("div", {
         children : (0, se.jsxs)(self.E.div, {
           initial : {
             x : 20,
             opacity : 0
           },
           animate : {
             x : 0,
             opacity : 1
           },
           transition : {
             delay : .6
           },
           className : "flex flex-col justify-center items-center text-xs bg-gray-900 gap-2 p-4 rounded-md",
           children : [(0, se.jsxs)("span", {
             className : "flex justify-center flex-wrap",
             children : [(0, se.jsx)("span", {
               role : "img",
               children : "\ud83d\udcc3 "
             }), (0, se.jsxs)("p", {
               className : "hidden md:flex",
               children : ["Tx Hash:", " ", (0, se.jsx)("a", {
                 className : "px-1 text-blue-500",
                 href : "https://bscscan.com/tx/".concat(path),
                 target : "_blank",
                 rel : "noreferrer",
                 children : path
               })]
             }), (0, se.jsxs)("p", {
               className : "flex md:hidden",
               children : ["Tx Hash:", " ", (0, se.jsx)("a", {
                 className : "px-1 text-blue-500",
                 href : "https://bscscan.com/tx/".concat(path),
                 target : "_blank",
                 rel : "noreferrer",
                 children : "Open link"
               })]
             })]
           }), (0, se.jsx)("p", {
             className : "text-xs text-gray-500",
             children : "Provide this to support in Discord if you have any issues."
           })]
         })
       })]
     });
   };
 },
 3438 : function render(s2, n, elem) {
   elem.d(n, {
     o9 : function encode() {
       return flags;
     },
     eN : function getConnectorsToTest() {
       return connectors;
     },
     tm : function doRefreshIScroll() {
       return compass;
     },
     Kf : function _normalizeSingle() {
       return newHash;
     },
     qk : function jsonFixer() {
       return value;
     }
   });
   var flags = ["Milty", "Jonatan", "Quirin", "Merla", "Benito", "Reamonn", "Jonathon", "Oswald", "Bennet", "Dominikus", "Leroux", "Delane", "Oswald", "Giovanny", "Vardan", "Hamilton", "Marquez", "Corvin", "Spyridon", "Jordy", "Brecht", "Soren", "Sigmund", "Bradley", "Enes", "Calder", "Jules", "Kareem", "Romek", "Bosse", "Melton", "Tylor", "Mead", "Sisto", "Colbey", "Elmo", "Fleming", "Rubert", "Silvio", "Millson", "Studs", "Sawyer", "Jacky", "Clint", "Steve", "Ibrahim", "Ormen", "Boto", "Warrane",
   "Dwyght", "Friedrich", "Wade", "Reinwald", "Rayford", "Jussuf", "Alexei", "Valdimiro", "Wilfert", "Nash", "Falk", "Watson", "Wolfgang", "Rodi", "Armstrong", "Odysseus", "Ernest", "Harland", "Kei", "Franciscus", "Walt", "Lonnie", "Cain", "Maurus", "Saverio", "Mart", "Giuliano", "Chauncey", "Jerry", "Quintinus", "Nimet", "Gerome", "Barclay", "Micah", "Gidion", "Linwood", "Nayan", "Coby", "Adonai", "Loreno", "Wakefield", "Kaspar", "Lytton", "Kelsey", "Yahir", "Hamelin", "Niko", "Sean", "Valerio",
   "Anselme", "Soren"];
   var connectors = ["Sherman", "Pinkerton", "Penny", "Altham", "Dukes", "Clapham", "Thackeray", "Acton", "Carlyle", "Torp", "Atterton", "Berkeley", "Melling", "Hampton", "Allerton", "Williams", "Thorne", "Asheton", "Presley", "Alby", "Digby", "Lindsey", "Byron", "Swet", "Crawford", "Norton", "Brandon", "Soames", "Newbury", "Gresham", "Alden", "Smyth", "Tyndall", "Ogden", "Stevens", "Dayton", "Helton", "Ogden", "Emsworth", "Ward", "Bunce", "Darby", "Smyth", "Cholmondeley", "Cholmondeley", "Sharman",
   "Remington", "Ogden", "Fletcher", "Cheek", "Hammett", "Nash", "Rudge", "Sweet", "Clark", "Milton", "Swales", "Appleton", "Morley", "Law", "Harding", "Harrington", "Haley", "Mitchell", "Stevenson", "Huxley", "Smithy", "Gartside", "Coombs", "Sutton", "Bunce", "Crompton", "Fiske", "Fletcher", "Brandon", "Hastings", "Graham", "Branson", "Leighton", "Notley", "Shirley", "Knotley", "Brown", "Marlowe", "Berkeley", "Benson", "Nottley", "Clifford", "Stampes", "Haley", "Lindsey", "Kendall", "Shirley",
   "Newbury", "Stonebridge", "Allerton", "Dukes", "Allerton", "Padley", "Livingstone"];
   var compass = ["SS", "SS", "STS", "STS", "SS", "SC", "SSE", "SSE", "BS", "HMS", "HMS", "ISS", "Star", "BS", "STS", "The", "SS", "CS", "SSE", "BS", "BS", "LWSS", "CS", "SS", "USS", "BC", "HMS", "HMS", "STS", "HMS", "HWSS", "LWSS", "BC", "STS", "HWSS", "LWSS", "BS", "The", "USS", "STS", "LWSS", "USS", "HMS", "HWSS", "SS", "CS", "Observer", "Retribution", "Matador", "Vanquisher", "Dreadnought", "Gremlin", "Alice", "Remus", "Fortune", "Suzanna", "Watcher", "Fortune", "Unicorn", "Geisha", "Vindicator",
   "Leviathan", "Bayonet", "Battalion", "Dauntless", "Terigon", "Terigon", "Marchana", "Bandit", "Remus", "Neptune", "Ulysses", "Gallimimus", "Remus", "Traveler", "Hunter", "Manhattan", "Remus", "Fortune", "Suzanna", "Watcher", "Fortune", "Unicorn", "Geisha", "Vindicator", "Leviathan", "Bayonet", "Battalion", "Dauntless", "Terigon", "Terigon", "Marchana", "Bandit", "Remus", "Neptune", "Ulysses", "Gallimimus", "Remus", "Traveler"];
   var newHash = ["Achilles", "Alexandria", "Ambition", "Aquitaine", "Armageddon", "Avadora", "Beholder", "Blade", "Corsair", "Dakota", "Dakota", "Dark", "Fury", "Galatea", "Geisha", "Gladiator", "Herald", "Inferno", "Infinitum", "Karnack", "Karnack", "Last Hope", "Lupus", "Messenger", "Muriela", "Nemesis", "Nomad", "Oblivion", "Observer", "Omen", "Oregon", "Pelican", "Pyrrhus", "Relentless", "Reliant", "Resolution", "Rhodes", "Serpent", "Stalker", "Stormfalcon", "Stormspike", "The Titan", "Tourist",
   "Unity", "Verminus", "Whirlwind", "SS", "SS", "STS", "STS", "SS", "SC", "SSE", "SSE", "BS", "HMS", "HMS", "ISS", "Star", "BS", "STS", "The", "SS", "CS", "SSE", "BS", "BS", "LWSS", "CS", "SS", "USS", "BC", "HMS", "HMS", "STS", "HMS", "HWSS", "Oblivion", "Observer", "Omen", "Oregon", "Pelican", "Pyrrhus", "Relentless", "Reliant", "Resolution", "Rhodes", "Serpent", "Stalker", "Stormfalcon", "Stormspike", "The Titan", "Tourist", "Unity", "Verminus", "Whirlwind", "SS", "SS", "STS"];
   var value = ["CryptoMines Universe", "Odrocury", "Thabbiter", "Pulmeron", "Ecryria", "Searus", "Gemia", "Melaphus", "Nueter", "Grarvis O22", "Sorth 33A5", "Dutrabos", "Lustronides", "Zullosie", "Yimagua", "Roq'd Mar", "Kongebro", "Vuruturn", "Droxuyama", "Miuq I11", "Zapus 5M0", "Begelia", "Gochimars", "Konvides", "Donvillon", "Ania", "Aenerth", "Tachiron", "Cichurilia", "Gagua 07", "Sector G"];
 }
}, function(f) {
 f.O(0, [774, 701, 888, 179], function() {
   return m = 97229, f(f.s = m);
   var m;
 });
 var t = f.O();
 _N_E = t;
}]);