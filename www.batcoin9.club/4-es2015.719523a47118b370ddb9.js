(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    k7sC: function (t, e, a) {
      "use strict";
      var s = a("01EG");
      class i extends s.a {
        constructor(t, e, a) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.fireStoreData = a),
            (this.pinnedItems = {
              isPinned: !1,
              data: [-1],
            }),
            (this.mobileScoreUrl = !1),
            (this.checkAssociate = null),
            (this.searchEventLsit = []),
            (this.mktIList = []),
            (this.isMatch_odds = !1),
            (this.bookmakerTab = !0),
            (this.nolistfoundMobile = !1),
            (this.dynamicDisableClass = !1),
            (this.istoggleScoreCard = !1),
            (this.autoScoreCardOpen = !1),
            (this.runnerObj = []),
            (this.getFancyMarketDataList = []),
            (this.ptRateParam = ""),
            (this.loading = !1),
            (this.loadingsession = !1),
            (this.commonTabs = "all"),
            (this.eventItems = {}),
            (this.editList = void 0),
            (this.isFancyRuns = null),
            (this.addList = void 0),
            (this.listCompetitionEventMkt = []),
            (this.eventList = {}),
            (this.SSELIVESCORE = []),
            (this.noEvents = !1),
            (this.bookDisc = !1),
            (this.isFancyTab = !0),
            (this.isBetFair = !1),
            (this.dynamicDomId = ""),
            (this.robotRef = !1),
            (this.robotOn = !1),
            (this.matchOddRobot = !1),
            (this.isFancyExistInList = !1),
            (this.tabArrayObject = []),
            (this.mktCounter = 0),
            (this.tempCatName = "Fancy Market"),
            (this.streamObj = {
              matchId: 0,
              channelId: 0,
              eventId: 0,
            }),
            (this.betDelay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            (this.stackValueList = [
              2, 3, 4, 5, 10, 20, 25, 40, 50, 75, 100, 125, 150, 175, 200, 225,
              250, 300, 350, 400, 450, 500, 750, 1e3, 1250, 1500, 2e3, 2500,
            ]),
            (this.maxStakeList = [
              10, 15, 20, 25, 30, 40, 45, 50, 60, 75, 80, 90, 100, 105, 120,
              125, 135, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600,
              750, 800, 900, 1e3, 1250, 1500, 2e3, 2250, 2500, 3e3, 4e3, 4500,
              6e3, 8e3, 9e3, 1e4, 12e3, 15e3, 2e4, 25e3, 3e4,
            ]),
            (this.stackValue = 5),
            (this.scoreCardObj = {
              eventId: 0,
              betradarId: 0,
              score2: 0,
            }),
            (this.masterMenu = {
              orgLoadMenu: [],
              loadMenu: [],
              menuTypes: {
                competition: "1",
                events: "2",
                market: "3",
              },
              childMenu: [],
              childMenuSubscribe: [],
              selectedChildMenu: [],
              selectedParentMenu: {},
              prevSelectedChildMenu: [],
              selectedCompetition: {
                visibleToPl: !0,
                canBet: !0,
              },
            }),
            (this.commentList = []),
            (this.eventId = "0"),
            (this.newExpo = []),
            (this.eventBreadCrumb = []),
            (this.isMarketType = !1),
            (this.playerEventDetails = []),
            (this.IsSelected = !1),
            (this.listMarketArray = []),
            (this.checkedCbVtoPL = !1),
            (this.betSlip = []),
            (this.to = " \u279f "),
            (this.modals = this.object.getDOMInstance().modal),
            (this.schedularManage = !0),
            (this.FirebaseschedularManage = !0),
            (this.unsubscribeUserProfile = []),
            (this.unsubscribeFirebasedata = []),
            (this.unsubscribeAllFirbasedata = []),
            (this.maxStakevalidation = !1),
            (this.unsubscribeAllBrodcaster = []),
            (this.firebaseStatus = []),
            (this.unsubmktStatusAuth = []),
            (this.loadContainer = !1),
            (this.searchEvent = []),
            (this.primiumSportBook = []),
            (this.mktDataList = []),
            (this.fancyMarketList = !1),
            (this.fancyMrketExposure = []),
            (this.fancyrunnerdata = []),
            (this.responsiveBetslip = !0),
            (this.pinMrketId = []),
            (this.fancyApiTimer = !0),
            (this.storefavfancystoreData = []),
            (this.storefavfancy = [
              {
                eventId: "",
                Bookmaker_Market: [],
                Bookmaker_Disc: [],
                fancymarkets: [],
                metermarkets: [],
                khadomarkets: [],
                pp: [],
                ld: [],
              },
            ]),
            (this.storefavMatchodd = []),
            (this.riskNetrunnerExposer = {
              runr1: "0",
              runr2: "0",
              runr3: "0",
            }),
            (this.riskNetUIExposer = {
              runr1: "",
              runr2: "",
              runr3: "",
            }),
            (this.minimizeFavSession = !1),
            (this.categoryDetails = {
              catName: "Fancy Market",
              id: 6,
              oddType: "AM",
              oddTypeCat: "Yes/No",
              runnersNo: "SINGLE",
            }),
            (this.runnermodel = !1),
            (this.inactiveApi = !1),
            (this.inactiveMrketApi = !1),
            (this.canVoidMarketPrivilege = !0),
            (this.canResettleMarketPrivilege = !0),
            (this.isdisableDateInput = !0),
            (this.marketListmultiselect = [
              {
                eventTypeName: "All",
                eventTypeId: 0,
                selected: !0,
              },
              {
                eventTypeName: "MO",
                eventTypeId: 4,
                selected: !0,
              },
              {
                eventTypeName: "BM 0%",
                eventTypeId: 4,
                selected: !0,
              },
              {
                eventTypeName: "BM 0.5%",
                eventTypeId: 4,
                selected: !0,
              },
            ]),
            (this.expandedgt = !1),
            (this.tempOddFeed = ""),
            (this.oddFeedData = ""),
            (this.feedValue = ""),
            (this.getMarketId = []),
            (this.schedularApiload = !0),
            (this.schedularApiloadInplay = !0),
            (this.unsubscribeOddsrc = []),
            (this.skeletonloader = !1),
            (this.dumyInplay = []),
            (this.clearfirebasetimeOut = []),
            (this.sportsbookobj = {
              name: "Games",
              virtualGames: !0,
              marketId: "1.000001",
              eventId: "33201468",
              eventName: "Sports Book",
              eventTypeId: "4",
              inPlay: !0,
              suspended: !1,
              status: "OPEN",
              runners: [
                {
                  sortPriority: 1,
                  virtualGames: !0,
                  runnerName: "Sports Book",
                  rnrStatus: "ACTIVE",
                  rnrVisibleToPl: !0,
                  btb: [
                    {
                      pr: 100,
                      sz: 100,
                      lv: 100,
                    },
                  ],
                  btl: [
                    {
                      pr: 100,
                      sz: 100,
                      lv: 100,
                    },
                  ],
                  id: 116521,
                },
                {
                  sortPriority: 1,
                  virtualGames: !0,
                  runnerName: "",
                  rnrStatus: "ACTIVE",
                  rnrVisibleToPl: !0,
                  btb: [
                    {
                      pr: 100,
                      sz: 0,
                      lv: 100,
                    },
                  ],
                  btl: [
                    {
                      pr: 100,
                      sz: 0,
                      lv: 100,
                    },
                  ],
                  id: 116521,
                },
              ],
              today: !1,
              tomorrow: !1,
              competitionName: "Womens International Twenty20 Matches",
              fancyIcon: !1,
              bookMakerIcon: !1,
              tvIcon: !1,
              betfairStatus: "OPEN",
            }),
            (this.virtualGames = {
              data: {
                id: 777,
                name: "Games",
                betfairId: "1003",
                type: "1",
                imageUrl: "/games-white.svg",
              },
              children: [
                {
                  name: "Games",
                  virtualGames: !0,
                  marketId: "1.000002",
                  eventId: "33201468",
                  eventName: "Player Contest",
                  eventTypeId: "4",
                  inPlay: !0,
                  suspended: !1,
                  status: "OPEN",
                  runners: [
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "Contest",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                  ],
                  today: !1,
                  tomorrow: !1,
                  competitionName: "Womens International Twenty20 Matches",
                  fancyIcon: !1,
                  bookMakerIcon: !1,
                  tvIcon: !1,
                  betfairStatus: "OPEN",
                },
                {
                  name: "Games",
                  virtualGames: !0,
                  marketId: "1.000003",
                  eventId: "33201468",
                  eventName: "Player Battle",
                  eventTypeId: "4",
                  inPlay: !0,
                  suspended: !1,
                  status: "OPEN",
                  runners: [
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "Player Battle",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                  ],
                  today: !1,
                  tomorrow: !1,
                  competitionName: "Womens International Twenty20 Matches",
                  fancyIcon: !1,
                  bookMakerIcon: !1,
                  tvIcon: !1,
                  betfairStatus: "OPEN",
                },
                {
                  name: "Games",
                  virtualGames: !0,
                  marketId: "1.000001",
                  eventId: "33201468",
                  eventName: "Sports Book",
                  eventTypeId: "4",
                  inPlay: !0,
                  suspended: !1,
                  status: "OPEN",
                  runners: [
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "Sports Book",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 100,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 100,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                  ],
                  today: !1,
                  tomorrow: !1,
                  competitionName: "Womens International Twenty20 Matches",
                  fancyIcon: !1,
                  bookMakerIcon: !1,
                  tvIcon: !1,
                  betfairStatus: "OPEN",
                },
                {
                  name: "Games",
                  virtualGames: !0,
                  marketId: "1.000004",
                  eventId: "001",
                  eventName: "Virtual Sports",
                  eventTypeId: "4",
                  inPlay: !0,
                  suspended: !1,
                  status: "OPEN",
                  runners: [
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "Virtual Sports",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 100,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 100,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                    {
                      sortPriority: 1,
                      virtualGames: !0,
                      runnerName: "",
                      rnrStatus: "ACTIVE",
                      rnrVisibleToPl: !0,
                      btb: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      btl: [
                        {
                          pr: 100,
                          sz: 0,
                          lv: 100,
                        },
                      ],
                      id: 116521,
                    },
                  ],
                  today: !1,
                  tomorrow: !1,
                  competitionName: "Womens International Twenty20 Matches",
                  fancyIcon: !1,
                  bookMakerIcon: !1,
                  tvIcon: !1,
                  betfairStatus: "OPEN",
                },
              ],
            });
        }
      }
      a("kyFz");
      var n = a("8Y7J");
      class r {
        static mapDataInBetfairId(t) {
          let e = [];
          for (let a of t) {
            let t = new r();
            (t.id = a.market_id),
              (t.mktStatus = a.betfair_data.status),
              (t.mktMatched = a.betfair_data.totalMatched),
              (t.rnrInf = o.setValueInRnrInf(a.betfair_data.runners)),
              e.push(t);
          }
          return e;
        }
        static mapDataInBetfairIdNoUserLogged(t) {
          let e = [];
          for (let a of t) {
            let t = new r();
            (t.id = a.market_id),
              (t.mktStatus = a.betfair_data.status),
              (t.rnrInf = o.setValueInRnrInfNoUserLogged(
                a.betfair_data.runners
              )),
              e.push(t);
          }
          return e;
        }
      }
      class o {
        static setValueInRnrInf(t) {
          let e = [];
          for (let a of t) {
            let t = new o();
            (t.id = a.selectionId),
              (t.btb = h.mapValueInBackLay(a.price.back)),
              (t.btl = h.mapValueInBackLay(a.price.lay)),
              e.push(t);
          }
          return e;
        }
        static setValueInRnrInfNoUserLogged(t) {
          let e = [];
          for (let a of t) {
            let t = new o();
            (t.id = a.selectionId),
              (t.btb = h.mapValueInBackLayNotLogggedIn(a.price.back)),
              (t.btl = h.mapValueInBackLayNotLogggedIn(a.price.lay)),
              e.push(t);
          }
          return e;
        }
      }
      class h {
        static mapValueInBackLay(t) {
          let e = [];
          for (let a of t) {
            let t = new h();
            (t.pr = a.price), (t.sz = a.size), e.push(t);
          }
          return e;
        }
        static mapValueInBackLayNotLogggedIn(t) {
          let e = [],
            a = 0;
          for (let s of t) {
            let t = new h();
            (t.lv = a), (t.pr = s.price), (t.sz = s.size), a++, e.push(t);
          }
          return e;
        }
        static randomNumber(t, e) {
          return Math.random() * (e - t) + t;
        }
      }
      a.d(e, "a", function () {
        return c;
      });
      class c extends i {
        constructor(t, e, a, s, i = !0, r) {
          super(t, e, r),
            (this.service = t),
            (this.object = e),
            (this._sse = a),
            (this.broadCast = s),
            (this.fireStoreData = r),
            (this.calculateExpfilter = new n.m()),
            this.init(i);
        }
        init(t) {
          t && !this.object.masterMenu.children
            ? this.broadCast.intervallTimer.subscribe(() => {})
            : this.getMasterMenuParsing();
        }
        getLocalIpAddress() {
          this.mktId != this.object.getConstants().PNL.SPECIALMARKETPARAM &&
            this.object.getLoginInstance().state.isPlayer &&
            this.service
              .getIPAddress(this.object.getURLInstance().IP_ADDRESS)
              .toPromise()
              .then((t) => {
                this.object.getUtilInstance().storeState("ipKey", t.ip);
              });
        }
        intervalListnerWithAuth(t) {
          let e = t;
          setTimeout(() => {
            this.currencyRate
              ? (this.getFancyPlayerEventDetails(e),
                this.getfncyEventDetails(e),
                this.exposerFancymrket(e),
                this.callFirsttimeMatchodd())
              : this.currencyRate ||
                setTimeout(() => {
                  this.getCurrencyRate(),
                    this.getFancyPlayerEventDetails(e),
                    this.getfncyEventDetails(e),
                    this.exposerFancymrket(e),
                    this.callFirsttimeMatchodd();
                }, 1e3);
          }, 30);
        }
        runnerApiInterval(t) {
          clearInterval(this.subscription),
            this.getfncyEventDetails(t),
            (this.subscription = setInterval(() => {
              this.object.getLoginInstance().state.isPlayer &&
                this.schedularManage &&
                this.getfncyEventDetails(t);
            }, 3e3));
        }
        intervalListnerWithoutAuth(t) {
          let e = t;
          this.getFancyGuestEventDetails(e),
            setTimeout(() => {
              this.object.getLoginInstance().state.isPlayer ||
                this.getFancyGuestEventDetails(e);
            }, 1e3),
            (this.subscription = setInterval(() => {
              this.getFancyGuestEventDetails(e);
            }, 6e4));
        }
        firebaseEventWeb() {
          var t = 0,
            e = 0,
            a = 3200;
          this.unsubscribeAllBrodcaster.push(
            this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
              .subscribe((s) => {
                let i = s.booleanKeys[0];
                if (i && !this.inactiveApi) {
                  if (i.marketSettled || i.marketUpdated || i.eventVoidReopn) {
                    if (
                      this.mktId ==
                      this.object.getConstants().PNL.SPECIALMARKETPARAM
                    )
                      return;
                    this.eventId == i.eventId &&
                      this.handleEventDetailDashboard(this.eventId, this.mktId),
                      this.object.isAdminLogin() &&
                        this.eventId == i.eventId &&
                        setTimeout(() => {
                          this.getAdminStatus();
                        }, 300);
                  }
                  if (
                    ((i.fancyMarketSettled || i.marketReopen) &&
                      this.eventId == i.eventId &&
                      this.hidePlayerBook(),
                    (i.fancyMktAdded ||
                      i.fancyMarketSettled ||
                      i.marketReopen) &&
                      this.eventId == i.eventId)
                  ) {
                    var n;
                    this.clearfirebasetimeOut.forEach((t) => {
                      clearTimeout(t);
                    }),
                      (this.clearfirebasetimeOut = []),
                      t++,
                      e++,
                      clearInterval(o);
                    var r = 2,
                      o = setInterval(function () {
                        r <= 0 && clearInterval(o),
                          1 == (r -= 1) && ((n = e), clearInterval(o));
                      }, 1e3),
                      h =
                        (new Date().getSeconds(),
                        setTimeout(() => {
                          if (t > 1) {
                            clearTimeout(h);
                            var s = e - n;
                            s < 0 && (s = 1),
                              (a = 1e3 * (s + 3)),
                              (t = 0),
                              (e = 0),
                              (n = 0),
                              setTimeout(() => {
                                this.FirebaseschedularManage &&
                                  this.getFancyPlayerEventDetails(this.eventId);
                              }, 1e3 * s);
                          } else
                            1 == t &&
                              ((t = 0),
                              (e = 0),
                              (n = 0),
                              (a = 3200),
                              clearTimeout(h),
                              this.FirebaseschedularManage &&
                                this.getFancyPlayerEventDetails(this.eventId));
                        }, a));
                    this.clearfirebasetimeOut.push(h);
                  }
                  "" == i.marketId &&
                    i.marketUpdated &&
                    this.getFancyPlayerEventDetails(this.eventId);
                }
              })
          );
        }
        firebaseEventMobile() {
          var t = 0,
            e = 0,
            a = 3200;
          this.unsubscribeAllBrodcaster.push(
            this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
              .subscribe((s) => {
                let i = s.booleanKeys[0];
                if (
                  i &&
                  (i.marketSettled || i.marketUpdated || i.eventVoidReopn)
                ) {
                  if (
                    this.mktId ==
                    this.object.getConstants().PNL.SPECIALMARKETPARAM
                  )
                    return;
                  this.eventId == i.eventId &&
                    this.handleEventDetailDashboard(this.eventId, this.mktId);
                }
                if (
                  (i.fancyMktAdded || i.fancyMarketSettled || i.marketReopen) &&
                  this.eventId == i.eventId
                ) {
                  var n;
                  this.clearfirebasetimeOut.forEach((t) => {
                    clearTimeout(t);
                  }),
                    (this.clearfirebasetimeOut = []),
                    this.hidePlayerBook(),
                    t++,
                    e++,
                    clearInterval(o);
                  var r = 2,
                    o = setInterval(function () {
                      r <= 0 && clearInterval(o),
                        1 == (r -= 1) && ((n = e), clearInterval(o));
                    }, 1e3),
                    h =
                      (new Date().getSeconds(),
                      setTimeout(() => {
                        if (t > 1) {
                          var s = e - n;
                          s < 0 && (s = 1);
                          let i = 1e3 * s;
                          clearTimeout(h),
                            (a = 1e3 * (s + 3)),
                            (t = 0),
                            (e = 0),
                            (n = 0),
                            setTimeout(() => {
                              this.FirebaseschedularManage &&
                                this.getFancyPlayerEventDetails(this.eventId);
                            }, i);
                        } else
                          1 == t &&
                            ((t = 0),
                            (e = 0),
                            (n = 0),
                            (a = 3200),
                            clearTimeout(h),
                            this.FirebaseschedularManage &&
                              this.getFancyPlayerEventDetails(this.eventId));
                      }, a));
                  this.clearfirebasetimeOut.push(h);
                }
                "" == i.marketId &&
                  i.marketUpdated &&
                  this.getFancyPlayerEventDetails(this.eventId);
              })
          );
        }
        getAdminStatus() {
          setTimeout(() => {
            this.playerEventDetails &&
              this.playerEventDetails.length > 0 &&
              (this.unsubmktStatusAuth.length &&
                this.unsubmktStatusAuth.forEach((t) => t.unsubscribe()),
              this.unsubscribeFirebasedata.length &&
                this.unsubscribeFirebasedata.forEach((t) => t.unsubscribe()),
              (this.getMarketId = []),
              this.playerEventDetails.length > 0 &&
                this.playerEventDetails.forEach((t) => {
                  this.getMarketId.push(t.marketId);
                }),
              this.getMarketDataDetailsEvents(this.playerEventDetails),
              this.getmarketStatus(this.playerEventDetails));
          }, 2300);
        }
        getFancyPlayerEventDetails(t) {
          (this.mktCounter = 0),
            this.object.getLoginInstance().state.isSUpandAdmin ||
              this.object.getLoginInstance().state.isBrandManager ||
              this.object.getLoginInstance().state.isMaster ||
              this.object.getLoginInstance().state.isOwner ||
              this.object.getLoginInstance().state.isTrManager ||
              this.object.getLoginInstance().state.isTrader ||
              this.object.getLoginInstance().state.isAssociate ||
              ((this.FirebaseschedularManage = !1),
              this.service
                .whitelabelget(
                  this.object.getURLInstance().getPlayerFancyEventDetails,
                  this.object.getConstants().PARAMSID.eventId + t,
                  this.headers()
                )
                .subscribe(
                  (e) => {
                    (this.getFancyMarketDataList = e.data),
                      setTimeout(() => {
                        this.getfancydataloader = e;
                      }, 300),
                      setTimeout(() => {
                        0 == this.playerEventDetails.length &&
                          this.getFancyMarketDataList.length > 0 &&
                          (this.object.noEvents = !0),
                          0 == this.playerEventDetails.length &&
                            0 == this.getFancyMarketDataList.length &&
                            ((this.object.noEvents = !1),
                            (this.object.showLiveTvButton = !1));
                      }, 1e3),
                      this.getFancyMarketDataList.filter(
                        (t) =>
                          t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.BookmakerCatDisc
                      ).length < 1
                        ? ((this.bookmakerTab = !1),
                          (this.nolistfoundMobile = !0),
                          (this.bookDisc = !1),
                          (this.object.getConstants().MKT_TABS.bookmaker2 =
                            this.object.getConstants().FANCY.BookmakerDefault))
                        : ((this.nolistfoundMobile = !1), (this.bookDisc = !0)),
                      this.getCurrencyRate(),
                      this.getFancyMarketDataList.forEach((t, e) => {
                        ("20221011" != this.object.themeChange.whitelableId &&
                          "20230120" != this.object.themeChange.whitelableId &&
                          "20230688" != this.object.themeChange.whitelableId &&
                          "20230702" != this.object.themeChange.whitelableId &&
                          "20230704" != this.object.themeChange.whitelableId &&
                          "20230709" != this.object.themeChange.whitelableId &&
                          "20230710" != this.object.themeChange.whitelableId &&
                          "20230713" != this.object.themeChange.whitelableId) ||
                          (t.categoryDetails.catName ==
                            this.object.getConstants().FANCY.BookmakerCatDisc &&
                            (t.markets = [])),
                          (t.categoryDetails.catName !=
                            this.object.getConstants().FANCY.fancy &&
                            t.categoryDetails.catName !=
                              this.object.getConstants().FANCY.meter &&
                            t.categoryDetails.catName !=
                              this.object.getConstants().FANCY.khado &&
                            t.categoryDetails.catName !=
                              this.object.getConstants().FANCY
                                .playerPerformace &&
                            t.categoryDetails.catName !=
                              this.object.getConstants().FANCY
                                .luckyNumMarket) ||
                            this.mktCounter++,
                          (t.isFancyTab = !1),
                          t.markets.map((e) => {
                            "Fancy_Market" == e.fancyCategory ||
                            "Khado_Market" == e.fancyCategory ||
                            "Meter_Market" == e.fancyCategory ||
                            "PP_Market" == e.fancyCategory ||
                            "Lucky_Num_Market" == e.fancyCategory
                              ? ((this.fancyMarketList = !0),
                                (t.isFancyTab = !0))
                              : (this.fancyMarketList = !1),
                              null != e.playerExposure ||
                              ("Fancy_Market" != e.fancyCategory &&
                                "Khado_Market" != e.fancyCategory &&
                                "Meter_Market" != e.fancyCategory &&
                                "PP_Market" != e.fancyCategory &&
                                "Lucky_Num_Market" != e.fancyCategory)
                                ? ((e.showbook = !0),
                                  (this.isFancyExistInList = !0))
                                : (e.showbook = !1);
                            let a = this.calculateCurrencyRateFancy(e);
                            (e.minStake = a.minstake),
                              (e.maxStake = a.maxStake);
                          });
                      }),
                      (this.FirebaseschedularManage = !0),
                      (this.loading = !1),
                      this.attactFancyBetSlipListner(),
                      this.getFancyListFilterData(),
                      this.filteFancyMarketData(),
                      this.changeBookMakerStatusOnRobot(),
                      this.showMarketTabsOnlyMarketExist(
                        this.getFancyMarketDataList
                      ),
                      this.fancyMrketExposure.length > 0 &&
                        this.fancyRnrOddsMap(),
                      this.maintainFavFancy(),
                      setTimeout(() => {
                        this.runnerApiInterval(t);
                      }, 350);
                  },
                  (t) => {
                    setTimeout(() => {
                      this.getfancydataloader = {
                        data: 200,
                      };
                    }, 300),
                      (this.loading = !1),
                      (this.FirebaseschedularManage = !0),
                      this.setError(t);
                  }
                ));
        }
        getCurrencyRate() {
          var t;
          setTimeout(() => {
            (t = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.currencyRate)) &&
              null != t &&
              (this.currencyRate = JSON.parse(t));
          }, 10);
        }
        calculateCurrencyRateMatchood(t) {
          let e = 0,
            a = 0;
          return this.object.loginState.getIsLogin() && this.currencyRate
            ? ((e =
                (e =
                  (t.minStake * this.object.getConstants().OWNERRATE) /
                  this.currencyRate.rate) > this.currencyRate.minStakeValue
                  ? e
                  : this.currencyRate.minStakeValue),
              (e = Math.ceil(e)),
              this.object.themeChange.bankingView
                ? (a =
                    (t.maxStake * this.object.getConstants().OWNERRATE) /
                    this.currencyRate.rate) > 5e5 && (a = 5e5)
                : (a =
                    (t.maxStake * this.object.getConstants().OWNERRATE) /
                    this.currencyRate.rate),
              {
                minstake: e,
                maxStake: a,
              })
            : {
                minstake: t.minStake,
                maxStake: t.maxStake,
              };
        }
        calculateCurrencyRateFancy(t) {
          let e = 0,
            a = 0;
          return this.object.loginState.getIsLogin() && this.currencyRate
            ? ((e =
                (e =
                  (t.minStake * this.object.getConstants().OWNERRATE) /
                  this.currencyRate.rate) > this.currencyRate.minStakeValue
                  ? e
                  : this.currencyRate.minStakeValue),
              (e = Math.ceil(e)),
              this.object.themeChange.bankingView
                ? (a =
                    (t.maxStake * this.object.getConstants().OWNERRATE) /
                    this.currencyRate.rate) > 5e5 &&
                  ("Bookmaker_Market" == t.fancyCategory ||
                    "Bookmaker_Disc" == t.fancyCategory)
                  ? (a = 5e5)
                  : a > 1e5 &&
                    (t.fancyCategory ==
                      this.object.getConstants().FANCY.Fancy_Market ||
                      t.fancyCategory ==
                        this.object.getConstants().FANCY.Lucky_Num_Market ||
                      t.fancyCategory ==
                        this.object.getConstants().FANCY.PP_Market) &&
                    (a = 1e5)
                : (a =
                    (t.maxStake * this.object.getConstants().OWNERRATE) /
                    this.currencyRate.rate),
              {
                minstake: e,
                maxStake: a,
              })
            : {
                minstake: t.minStake,
                maxStake: t.maxStake,
              };
        }
        getfncyEventDetails(t) {
          this.object.getLoginInstance().state.isSUpandAdmin ||
            this.object.getLoginInstance().state.isBrandManager ||
            this.object.getLoginInstance().state.isMaster ||
            this.object.getLoginInstance().state.isOwner ||
            this.object.getLoginInstance().state.isTrManager ||
            this.object.getLoginInstance().state.isTrader ||
            this.object.getLoginInstance().state.isAssociate ||
            (this.getFancyMarketDataList.length ||
              clearInterval(this.subscription),
            (this.schedularManage = !1),
            this.service
              .whitelabelget(
                this.object.getURLInstance().getFancyRunner,
                this.object.getConstants().PARAMSID.eventId + t,
                this.headers()
              )
              .subscribe(
                (t) => {
                  (this.schedularManage = !0),
                    (this.fancyrunnerdata = []),
                    (this.fancyrunnerdata = t.data),
                    this.fancyRnrOddsMap();
                },
                (t) => {
                  (this.loading = !1),
                    (this.schedularManage = !0),
                    this.setError(t);
                }
              ));
        }
        exposerFancymrket(t) {
          this.object.getLoginInstance().state.isSUpandAdmin ||
            this.object.getLoginInstance().state.isBrandManager ||
            this.object.getLoginInstance().state.isMaster ||
            this.object.getLoginInstance().state.isOwner ||
            this.object.getLoginInstance().state.isTrManager ||
            this.object.getLoginInstance().state.isTrader ||
            this.object.getLoginInstance().state.isAssociate ||
            this.service
              .get(
                this.object.getURLInstance().getPlayerExposures,
                this.object.getConstants().PARAMSID.eventId +
                  t +
                  "&isPlayer=true",
                this.headers()
              )
              .subscribe(
                (t) => {
                  (this.fancyMrketExposure = t.data), this.fancyRnrOddsMap();
                },
                (t) => {
                  this.setError(t);
                }
              );
        }
        afterMatchoddBetplace(t) {
          this.exposerFancymrket(t),
            setTimeout(() => {
              this.playerEventDetails.forEach((t, e) => {
                t.runners.forEach((e) => {
                  var a = this.fancyMrketExposure.find(
                    (a) => a.sid == e.selectionId && a.mktId == t.marketId
                  );
                  a &&
                    ((e.playerExposure = a.ex),
                    (e.playerExposureTmp = `<span class=${
                      a.ex > 0
                        ? "text-green"
                        : 0 == a.ex
                        ? "text-black"
                        : "text-red"
                    }>${a.ex}</span>`)),
                    (e.showAverageOdds = !0);
                });
              });
            }, 1200);
        }
        callFirsttimeMatchodd() {
          this.playerEventDetails &&
            setTimeout(() => {
              this.playerEventDetails.forEach((t, e) => {
                t.runners.forEach((e) => {
                  var a = this.fancyMrketExposure.find(
                    (a) => a.sid == e.selectionId && a.mktId == t.marketId
                  );
                  a &&
                    ((e.playerExposure = a.ex),
                    (e.playerExposureTmp = `<span class=${
                      a.ex > 0
                        ? "text-green"
                        : 0 == a.ex
                        ? "text-black"
                        : "text-red"
                    }>${a.ex}</span>`)),
                    (e.showAverageOdds = !0);
                });
              });
            }, 600);
        }
        fancyRnrOddsMap() {
          this.getFancyMarketDataList.forEach((t, e) => {
            t.markets.map((t) => {
              this.fancyrunnerdata.filter((e) => e.marketId == t.marketId) &&
                (t.runners = this.fancyrunnerdata.filter(
                  (e) => e.marketId == t.marketId
                )),
                t.runners.map((e, a) => {
                  var s = this.fancyMrketExposure.find(
                    (t) => t.sid == e.selectionId && t.mktId == e.marketId
                  );
                  s
                    ? (t.fancyCategory !=
                        this.object.getConstants().FANCY.Bookmaker_Market &&
                        t.fancyCategory !=
                          this.object.getConstants().FANCY.Bookmaker_Disc) ||
                      (e.playerExposure = s.ex)
                    : (e.playerExposure = 0);
                });
              var e = this.fancyMrketExposure.find(
                (e) => e.mktId == t.marketId
              );
              e
                ? ((t.playerExposure = e.ex), (t.showbook = !0))
                : (t.playerExposure = 0);
            });
          }),
            this.attactFancyBetSlipListner();
        }
        getFancyGuestEventDetails(t) {
          this.object.getLoginInstance().state.isSUpandAdmin ||
            this.object.getLoginInstance().state.isBrandManager ||
            this.object.getLoginInstance().state.isMaster ||
            this.service
              .whitelabelget(
                this.object.getURLInstance().getFancyEventDetails,
                this.object.getConstants().PARAMSID.eventId + t,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                (this.loading = !1),
                  (this.getFancyMarketDataList = t.data),
                  (this.getfancydataloader = t),
                  this.getFancyMarketDataList.filter(
                    (t) =>
                      t.categoryDetails.catName ==
                      this.object.getConstants().FANCY.BookmakerCatDisc
                  ).length < 1
                    ? ((this.bookmakerTab = !1),
                      (this.nolistfoundMobile = !0),
                      (this.bookDisc = !1),
                      (this.object.getConstants().MKT_TABS.bookmaker2 =
                        this.object.getConstants().FANCY.BookmakerDefault))
                    : ((this.nolistfoundMobile = !1), (this.bookDisc = !0)),
                  this.getFancyMarketDataList.forEach((t, e) => {
                    ("20221011" != this.object.themeChange.whitelableId &&
                      "20230120" != this.object.themeChange.whitelableId &&
                      "20230688" != this.object.themeChange.whitelableId &&
                      "20230702" != this.object.themeChange.whitelableId &&
                      "20230704" != this.object.themeChange.whitelableId &&
                      "20230709" != this.object.themeChange.whitelableId &&
                      "20230710" != this.object.themeChange.whitelableId &&
                      "20230713" != this.object.themeChange.whitelableId) ||
                      (t.categoryDetails.catName ==
                        this.object.getConstants().FANCY.BookmakerCatDisc &&
                        (t.markets = [])),
                      (t.categoryDetails.catName ==
                        this.object.getConstants().FANCY.fancy ||
                        t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.meter ||
                        t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.khado ||
                        this.object.getConstants().FANCY.playerPerformace ||
                        this.object.getConstants().FANCY.luckyNumMarket) &&
                        this.mktCounter++,
                      t.categoryDetails.catName ==
                        this.object.getConstants().MKT_TABS.bookmaker2 &&
                        (t.bookmakerMarket = t.markets),
                      t.markets.map((e) => {
                        "Fancy_Market" == e.fancyCategory ||
                        "Khado_Market" == e.fancyCategory ||
                        "Meter_Market" == e.fancyCategory ||
                        "PP_Market" == e.fancyCategory ||
                        "Lucky_Num_Market" == e.fancyCategory
                          ? ((this.fancyMarketList = !0), (t.isFancyTab = !0))
                          : (this.fancyMarketList = !1);
                      });
                  }),
                  this.getFancyListFilterData(),
                  this.filteFancyMarketData(),
                  this.attactFancyBetSlipListner(),
                  this.showMarketTabsOnlyMarketExist(
                    this.getFancyMarketDataList
                  );
              })
              .catch((t) => {
                setTimeout(() => {
                  this.getfancydataloader = {
                    data: 200,
                  };
                }, 300),
                  (this.loading = !1);
              });
        }
        showMarketTabsOnlyMarketExist(t) {
          0 == t.length && (this.fancyMarketList = !1),
            this.mktCounter != this.tabArrayObject.length &&
              ((this.object.commonCatName = this.tempCatName),
              (this.object.fancyCategoryExist = !1)),
            (this.tabArrayObject = []),
            t.forEach((t) => {
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.BookmakerDefault &&
                t.categoryDetails.catName !=
                  this.object.getConstants().FANCY.BookmakerCatDisc &&
                this.tabArrayObject.push(t.categoryDetails);
            }),
            this.tabArrayObject.length &&
              (this.tempCatName = this.tabArrayObject[0].catName);
        }
        handleEventDetailDashboard(t, e) {
          this.object.getLoginInstance().state.isSUpandAdmin ||
            this.object.getLoginInstance().state.isBrandManager ||
            this.object.getLoginInstance().state.isMaster ||
            (this.object.loginState.getIsLogin()
              ? (this.getCurrencyRate(),
                setTimeout(() => {
                  this.currencyRate
                    ? this.handleEventDetailDashboardAuth(t, e)
                    : this.currencyRate ||
                      setTimeout(() => {
                        this.getCurrencyRate(),
                          this.handleEventDetailDashboardAuth(t, e);
                      }, 1400);
                }, 30))
              : this.handleEventDetailDashboardNonAuth(t, e));
        }
        handleEventDetailDashboardNonAuth(t, e) {
          (this.mktIList = []),
            (this.noEvents = !1),
            (this.object.noEvents = !0),
            this.service
              .whitelabelget(
                this.object.getURLInstance().eventDetailDashboard,
                this.object.getConstants().PARAMSID.eventId + t,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  this.setSuccess(t),
                    this.getmatchSourceEventdetail(),
                    0 == t.data.marketDetails.length &&
                      ((this.noEvents = !0), (this.object.noEvents = !1)),
                    (this.getMarketId = []),
                    (this.playerEventDetails = t.data.marketDetails),
                    this.playerEventDetails.forEach((t) => {
                      (t.betfairStatus = "OPEN"),
                        t.hasOwnProperty("marketType") &&
                          (t.name.includes("Goals") ||
                            t.name.includes("goals")) &&
                          (t.name = t.name.substring(t.name.length - 10)),
                        this.getMarketId.push(t.marketId);
                    }),
                    (this.mktId = this.playerEventDetails[0]
                      ? this.playerEventDetails[0].marketId
                      : ""),
                    this.mktId &&
                      (this.getMarketDataDetailsEvents(this.playerEventDetails),
                      this.getmarketStatus(this.playerEventDetails)),
                    (this.loading = !1);
                },
                (t) => {
                  (this.object.noEvents = !1),
                    (this.loading = !1),
                    this.setError(t);
                }
              );
        }
        handleEventDetailDashboardAuth(t, e) {
          (this.mktIList = []),
            (this.object.noEvents = !0),
            (this.noEvents = !1),
            this.object.getLoginInstance().state.isOwner ||
              this.object.getLoginInstance().state.isTrManager ||
              this.object.getLoginInstance().state.isTrader ||
              this.object.getLoginInstance().state.isAssociate ||
              this.service
                .get(
                  this.object.getURLInstance().getPlayerEventDetails,
                  this.object.getConstants().PARAMSID.eventId + t,
                  this.headers()
                )
                .toPromise()
                .then(
                  (t) => {
                    if (
                      (0 == t.data.marketDetails.length &&
                        ((this.noEvents = !0), (this.object.noEvents = !1)),
                      (this.getMarketId = []),
                      this.getmatchSourceEventdetail(),
                      t.data.marketDetails.forEach((t) => {
                        (t.betfairStatus = "OPEN"),
                          (this.runnerObj = []),
                          t.hasOwnProperty("marketType") &&
                            (t.name.includes("Goals") ||
                              t.name.includes("goals")) &&
                            (t.name = t.name.substring(t.name.length - 10)),
                          t.runners.forEach((t) => {
                            (t.playerExposure = isNaN(t.playerExposure)
                              ? 0
                              : parseFloat(t.playerExposure).toFixed(2)),
                              (t.playerExposureTmp = `<span class=${
                                t.playerExposure > 0
                                  ? "text-green"
                                  : 0 == t.playerExposure
                                  ? "text-black"
                                  : "text-red"
                              }>${t.playerExposure}</span>`),
                              (t.showAverageOdds = !0);
                          });
                        let e = this.calculateCurrencyRateMatchood(t);
                        (t.minStake = e.minstake),
                          (t.maxStake = e.maxStake),
                          this.getMarketId.push(t.marketId);
                      }),
                      (this.loading = !1),
                      (this.playerEventDetails = t.data.marketDetails),
                      (this.eventNameonScore = this.playerEventDetails[0]),
                      (this.mktId = this.playerEventDetails[0]
                        ? this.playerEventDetails[0].marketId
                        : ""),
                      this.mktId &&
                        (this.unsubmktStatusAuth.length &&
                          this.unsubmktStatusAuth.forEach((t) =>
                            t.unsubscribe()
                          ),
                        this.unsubscribeFirebasedata.length &&
                          this.unsubscribeFirebasedata.forEach((t) =>
                            t.unsubscribe()
                          ),
                        this.getmarketStatus(this.playerEventDetails),
                        this.getMarketDataDetailsEvents(
                          this.playerEventDetails
                        )),
                      this.handleMultiMktParsing(),
                      this.handleEventSearchMatch(""),
                      this.playerEventDetails.length)
                    )
                      this.object.setRecents(
                        this.object.getConstants().PNL.SPORTS,
                        this.playerEventDetails[0]
                      );
                    else {
                      let t = JSON.parse(
                          this.object.getUtilInstance().getStore("recents")
                        ),
                        e = t.findIndex((t) => t.eventId == this.eventId);
                      if ((t.splice(e, 1), e < 0)) return;
                      this.object
                        .getUtilInstance()
                        .storeState("recents", JSON.stringify(t));
                    }
                    this.scoreCardVisiblity();
                  },
                  (t) => {
                    (this.loading = !1),
                      (this.object.noEvents = !1),
                      this.setError(t);
                  }
                );
        }
        handleEventSearchMatch(t) {
          (this.bookmakerTab = !0),
            (this.isFancyTab = !0),
            (this.object.getConstants().MKT_TABS.bookmaker =
              this.object.getConstants().FANCY.BookmakerDefault),
            (this.selectmarketId = t ? t.categoryDetails.catName : ""),
            (this.selectOddsmarketId = ""),
            this.getFancyListFilterData(),
            this.selectmarketId &&
              this.mobileFilterAnalytics(t.categoryDetails.catName);
        }
        handleEventSearchMatchOdds(t) {
          (this.selectmarketId = ""),
            (this.selectOddsmarketId = t.marketType),
            (this.cardType = t.name),
            this.getFancyListFilterData(),
            this.mobileFilterAnalytics("MATCH_ODDS");
        }
        handleEventSearchMatchMarkets(t) {
          (this.selectmarketId = this.object.getConstants().FANCY.fancy),
            (this.object.commonCatName = "Fancy Market"),
            (this.selectOddsmarketId = ""),
            (this.cardType = "markets"),
            (this.isFancyTab = !0),
            this.changeMarketTab(this.tabArrayObject[0].catName, ""),
            this.getFancyListFilterData(),
            this.mobileFilterAnalytics(
              this.object.getConstants().FANCY.Fancy_Market
            );
        }
        mobileFilterAnalytics(t) {
          this.object.getMobileFilter({
            Filter_click: t,
          });
        }
        getFancyListFilterData() {
          if (this.selectOddsmarketId) {
            let t = this.playerEventDetails.filter(
              (t) => t.marketType == this.selectOddsmarketId
            );
            (this.getFancyMarketList = []),
              (this.playerEventData = t),
              (this.isFancyTab = !1),
              (this.nolistfoundMobile = !0);
          } else if (this.selectmarketId) {
            let t = this.getFancyMarketDataList.filter(
              (t) => t.categoryDetails.catName == this.selectmarketId
            );
            (this.playerEventData = []),
              (this.getFancyMarketList = t),
              (this.cardType = t.length
                ? this.getFancyMarketList[0].categoryDetails.catName
                : this.selectmarketId),
              (this.isFancyTab = !1),
              this.selectmarketId ==
              this.object.getConstants().FANCY.BookmakerDefault
                ? this.getFancyMarketList.forEach((t) => {
                    t.categoryDetails.catName ==
                      this.object.getConstants().FANCY.BookmakerDefault &&
                      ((this.bookmakerTab = !1),
                      (this.isFancyTab = !1),
                      (t.categoryDetails.isFancyTab = !1),
                      (this.nolistfoundMobile = !1));
                  })
                : this.selectmarketId ==
                  this.object.getConstants().FANCY.BookmakerCatDisc
                ? this.getFancyMarketList.forEach((t) => {
                    t.categoryDetails.catName ==
                      this.object.getConstants().FANCY.BookmakerCatDisc &&
                      ((this.bookmakerTab = !0),
                      (this.isFancyTab = !1),
                      (t.categoryDetails.isFancyTab = !1),
                      (this.nolistfoundMobile = !1));
                  })
                : this.selectmarketId ==
                    this.object.getConstants().FANCY.fancy &&
                  ((this.nolistfoundMobile = !0),
                  (this.bookmakerTab = !1),
                  (this.isFancyTab = !0),
                  (this.cardType = "markets"));
          } else {
            if (
              (this.getFancyMarketDataList.forEach((t) => {
                t.markets.forEach((e) => {
                  e.fancyCategory ==
                    this.object.getConstants().FANCY.Bookmaker_Disc &&
                    (t.categoryDetails.marketDisc = e.marketDisc);
                });
              }),
              (this.playerEventData = this.playerEventDetails),
              (this.getFancyMarketList = this.getFancyMarketDataList),
              (this.fancyListName = this.getFancyMarketDataList),
              !this.fancyListName)
            )
              return;
            let t = [];
            this.fancyListName.forEach((e) => {
              0 != e.markets.length && e.markets[0].runners && t.push(e);
            }),
              (this.fancyListName = t),
              (this.cardType = this.object.getConstants().MKT_TABS.all);
          }
          this.maintainFavMatchodd();
        }
        attactFancyBetSlipListner() {
          (this.fancyList = this.getFancyMarketDataList),
            this.fancyList.forEach((t) => {
              t.markets.forEach((t) => {
                let e = t.playerExposure ? t.playerExposure : 0,
                  a = e;
                t.runners &&
                  t.runners.forEach((s) => {
                    let i = s.playerExposure ? s.playerExposure : 0,
                      n = i;
                    i = `<span class=${
                      i > 0 ? "text-green" : 0 == i ? "text-black" : "text-red"
                    }>${
                      i > 0
                        ? "+" + parseFloat(i).toFixed(2)
                        : parseFloat(i).toFixed(2)
                    }</span>`;
                    let r = this.betSlip.filter(
                        (t) => Number(t.marketId) == Number(s.marketId)
                      ),
                      o = 0;
                    r.length > 0
                      ? (this.betSlip.forEach((r) => {
                          if (
                            "MATCH_ODDS" != r.fancyMarketCategory &&
                            "OTHER_MKTS" != r.fancyMarketCategory
                          )
                            if ("SINGLE" == r.runnersNo)
                              if ("Fancy_Market1" == t.fancyCategory)
                                (o -=
                                  0 == r.sideType
                                    ? r.exchangeStake
                                    : (r.odds / 100) * r.exchangeStake),
                                  (o = parseFloat(o).toFixed(2)),
                                  (o = (o =
                                    parseFloat(o) + parseFloat(a)).toFixed(2)),
                                  (t.playerExposure = o = e + this.to + o);
                              else {
                                let a,
                                  s = Number.POSITIVE_INFINITY;
                                if (
                                  this.object
                                    .getUtilInstance()
                                    .isNullOrUndefined(r.fancyPlayerBook[0])
                                )
                                  2 == r.sideType
                                    ? (s =
                                        "Meter_Market" == r.fancyMarketCategory
                                          ? Number(r.runs) *
                                            parseFloat(r.exchangeStake) *
                                            -1
                                          : -1 * parseFloat(r.exchangeStake))
                                    : 3 == r.sideType &&
                                      (s =
                                        "Meter_Market" == r.fancyMarketCategory
                                          ? Number(
                                              r.runs + r.meter - Number(r.runs)
                                            ) *
                                            parseFloat(r.exchangeStake) *
                                            -1
                                          : -1 *
                                            parseFloat(r.exchangeStake) *
                                            (r.odds / 100));
                                else {
                                  let t, e;
                                  if (0 == parseFloat(r.exchangeStake)) {
                                    (t = Number(r.fancyPlayerBook[0].run)),
                                      (e = Number(
                                        r.fancyPlayerBook[
                                          r.fancyPlayerBook.length - 1
                                        ].run
                                      ));
                                    for (let a = t; a <= e; a++)
                                      for (
                                        let t = 0;
                                        t < r.fancyPlayerBook.length;
                                        t++
                                      ) {
                                        let e = 0;
                                        r.fancyPlayerBook[t].run == a &&
                                          (e += parseFloat(
                                            r.fancyPlayerBook[t].amount
                                          )),
                                          s > e && (s = e);
                                      }
                                  } else {
                                    r.fancyPlayerBook[0].run >= r.runs
                                      ? r.fancyPlayerBook.unshift({
                                          amount: r.fancyPlayerBook[0].amount,
                                          run: (t =
                                            r.fancyPlayerBook[0].run == r.runs
                                              ? r.runs - 1
                                              : r.runs),
                                        })
                                      : (t =
                                          r.fancyPlayerBook[0].run < r.runs
                                            ? r.fancyPlayerBook[0].run
                                            : r.runs),
                                      r.fancyPlayerBook[
                                        r.fancyPlayerBook.length - 1
                                      ].run <= r.runs
                                        ? r.fancyPlayerBook.push({
                                            amount:
                                              r.fancyPlayerBook[
                                                r.fancyPlayerBook.length - 1
                                              ].amount,
                                            run: (e =
                                              r.fancyPlayerBook[
                                                r.fancyPlayerBook.length - 1
                                              ].run == r.runs
                                                ? r.runs + 1
                                                : r.runs),
                                          })
                                        : (e =
                                            r.fancyPlayerBook[
                                              r.fancyPlayerBook.length - 1
                                            ].run > r.runs
                                              ? r.fancyPlayerBook[
                                                  r.fancyPlayerBook.length - 1
                                                ].run
                                              : r.runs),
                                      "Meter_Market" == r.fancyMarketCategory &&
                                        (t = 0);
                                    for (
                                      let i = Number(t);
                                      i <= Number(e);
                                      i++
                                    ) {
                                      let t = 0;
                                      r.runs <= i && 2 == r.sideType
                                        ? (t =
                                            "Meter_Market" ==
                                            r.fancyMarketCategory
                                              ? (i - r.runs) * r.exchangeStake
                                              : parseFloat(r.exchangeStake) *
                                                (r.odds / 100))
                                        : r.runs > i && 3 == r.sideType
                                        ? (t =
                                            "Meter_Market" ==
                                            r.fancyMarketCategory
                                              ? (r.runs - i) * r.exchangeStake
                                              : parseFloat(r.exchangeStake))
                                        : r.runs > i && 2 == r.sideType
                                        ? (t =
                                            "Meter_Market" ==
                                            r.fancyMarketCategory
                                              ? (i - r.runs) * r.exchangeStake
                                              : -1 *
                                                parseFloat(r.exchangeStake))
                                        : r.runs <= i &&
                                          3 == r.sideType &&
                                          (t =
                                            "Meter_Market" ==
                                            r.fancyMarketCategory
                                              ? (r.runs - i) * r.exchangeStake
                                              : -1 *
                                                parseFloat(r.exchangeStake) *
                                                (r.odds / 100));
                                      for (
                                        let e = 0;
                                        e < r.fancyPlayerBook.length;
                                        e++
                                      )
                                        r.fancyPlayerBook[e].run == i &&
                                          (t += parseFloat(
                                            r.fancyPlayerBook[e].amount
                                          )),
                                          r.fancyPlayerBook[e].run <= r.runs &&
                                            "Meter_Market" ==
                                              r.fancyMarketCategory &&
                                            3 == r.sideType &&
                                            (a = r.fancyPlayerBook[e].amount);
                                      s > t && (s = t);
                                    }
                                  }
                                }
                                (o = parseFloat(o).toFixed(2)),
                                  (o = (o = parseFloat(o) + s).toFixed(2)),
                                  (e = parseFloat(e).toFixed(2)),
                                  (t.playerExposure = o = e + this.to + o);
                              }
                            else
                              "Bookmaker_Disc" == t.fancyCategory
                                ? r.selectionId == s.selectionId
                                  ? 0 == r.sideType
                                    ? (o += (r.odds / 100) * r.exchangeStake)
                                    : ((o -= (r.odds / 100) * r.exchangeStake),
                                      (o *= 1 - t.marketDisc / 100))
                                  : 0 == r.sideType
                                  ? ((o =
                                      parseFloat(o) -
                                      parseFloat(r.exchangeStake)),
                                    (o *= 1 - t.marketDisc / 100))
                                  : (o =
                                      parseFloat(o) +
                                      parseFloat(r.exchangeStake))
                                : r.selectionId == s.selectionId
                                ? 0 == r.sideType
                                  ? (o += (r.odds / 100) * r.exchangeStake)
                                  : (o -= (r.odds / 100) * r.exchangeStake)
                                : (o =
                                    0 == r.sideType
                                      ? parseFloat(o) -
                                        parseFloat(r.exchangeStake)
                                      : parseFloat(o) +
                                        parseFloat(r.exchangeStake)),
                                (o = parseFloat(o).toFixed(2)),
                                (o = (o =
                                  parseFloat(o) + parseFloat(n)).toFixed(2)),
                                (s.playerExposure = o =
                                  i +
                                  this.to +
                                  (o = `<span class=${
                                    o > 0
                                      ? "text-green"
                                      : 0 == o
                                      ? "text-black"
                                      : "text-red"
                                  }>${o}</span>`));
                        }),
                        (s.showAverageOdds = !1),
                        (s.playerExposureValue = n))
                      : ((t.playerExposure = e),
                        (s.playerExposure = i),
                        (s.playerExposureValue = n),
                        (s.showAverageOdds = !0));
                  });
              });
            });
        }
        attachListeners() {
          this.attachChildMenuListner();
        }
        attachBetSlipListner() {
          try {
            this.unsubscribeAllBrodcaster.push(
              this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.BETSLIPLIST)
                .subscribe(
                  (t) => {
                    (this.betSlip = t),
                      this.playerEventDetails &&
                        this.playerEventDetails.forEach((t) => {
                          t.runners.forEach((e) => {
                            let a = e.playerExposure ? e.playerExposure : 0,
                              s = a;
                            a = `<span class=${
                              a > 0
                                ? "text-green"
                                : 0 == a
                                ? "text-black"
                                : "text-red"
                            }>${a}</span>`;
                            let i = 0;
                            this.betSlip.find((e) => e.marketId == t.marketId)
                              ? (this.betSlip.forEach((a) => {
                                  ("MATCH_ODDS" != a.fancyMarketCategory &&
                                    "OTHER_MKTS" != a.fancyMarketCategory) ||
                                    a.marketId != t.marketId ||
                                    ((i = parseFloat(i)),
                                    (a.exchangeStake = parseFloat(
                                      a.exchangeStake
                                    )),
                                    (a.odds = parseFloat(a.odds)),
                                    a.selectionId == e.selectionId
                                      ? 0 == a.sideType
                                        ? (i += (a.odds - 1) * a.exchangeStake)
                                        : (i -= (a.odds - 1) * a.exchangeStake)
                                      : 0 == a.sideType
                                      ? (i -= a.exchangeStake)
                                      : (i += a.exchangeStake));
                                }),
                                (i = parseFloat(i).toFixed(2)),
                                (i = (i =
                                  parseFloat(i) + parseFloat(s)).toFixed(2)),
                                (e.playerExposureTmp =
                                  a +
                                  this.to +
                                  (i = `<span class=${
                                    i > 0
                                      ? "text-green"
                                      : 0 == i
                                      ? "text-black"
                                      : "text-red"
                                  }>${i > 0 ? "+" + i : i}</span>`)),
                                (e.showAverageOdds = !1))
                              : ((e.showAverageOdds = !0),
                                (e.playerExposureTmp = a));
                          });
                        });
                  },
                  (t) => {
                    this.setError(t);
                  }
                )
            );
          } catch (t) {}
        }
        attachChildMenuListner() {
          this.unsubscribeAllBrodcaster.push(
            this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.INVOKE_CHILDMENU)
              .subscribe((t) => {
                this.handleMenuListClick(
                  t.childMenu,
                  t.childMenu.data.name,
                  null,
                  t.childMenu.data.betfairId
                );
              })
          );
        }
        showPlayerExposureOnRunner(t, e, a, s) {
          "associate" != this.checkAssociate &&
            ((this.isBetFair = "betFair" == s),
            (this.marketCategory = a
              ? "Bookmaker Market" == a.catName
                ? `Bookmaker Market +${e.marketDisc}%`
                : a.catName
              : e.name),
            (this.isFancyRuns = t.runs),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.GETCAT,
              {
                category: a,
              }
            ),
            this.object
              .getDOMInstance()
              .showModal(this.object.getDOMInstance().modal.playerExposure),
            this.getPlayerMarketDetails(t, e));
        }
        playerExposureAfterBet(t, e) {
          this.service
            .get(
              this.object.getURLInstance().getPlayerEventDetails,
              this.object.getConstants().PARAMSID.eventId + t,
              this.headers()
            )
            .toPromise()
            .then(
              (t) => {
                this.setSuccess(t),
                  t.data.marketDetails.forEach((t, e) => {
                    t.runners.forEach((e, a) => {
                      t.runners[a].sortPriority === e.sortPriority &&
                        this.newExpo.push(Number(t.runners[a].playerExposure));
                    });
                  });
              },
              (t) => {
                this.setError(t);
              }
            );
        }
        getPlayerMarketDetails(t, e) {
          let a, s;
          (this.loading = !0),
            (s = this.object.specialMarket
              ? this.object.getConstants().PNL.SPECIAL_MARKET
              : this.object.getConstants().PNL.SPORTS),
            this.object.getLoginInstance().state.isOwner ||
            this.object.getLoginInstance().state.isTrManager ||
            this.object.getLoginInstance().state.isTrader
              ? ((a = this.object.getURLInstance().getOwnerExposureList),
                (this.ptRateParam = ""))
              : ((a = this.object.getURLInstance().getPlayerMarketDetails),
                (this.ptRateParam =
                  this.object.getConstants().PARAMSID.ptRate +
                  this.object.defaultRate +
                  this.object.getConstants().PARAMSID.showOnRates +
                  this.object.showOnRates));
          let i = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.currency),
            n = e.marketId,
            r = e.eventId,
            o = t.selectionId,
            h =
              this.object.getConstants().PARAMSID.marketId +
              n +
              this.object.getConstants().PARAMSID.currency +
              i +
              "&" +
              this.object.getConstants().PARAMSID.eventId +
              r +
              "&" +
              this.object.getConstants().PARAMSID.selectionId +
              o +
              "&" +
              this.object.getConstants().PARAMSID.gameType +
              s +
              "&isBetfair=" +
              this.isBetFair +
              "&fc=" +
              e.fancyCategory +
              this.ptRateParam;
          this.service
            .adminget(a, h, this.headers())
            .toPromise()
            .then((t) => {
              (this.getPlayerExposureList = t.data),
                this.getPlayerExposureList &&
                  (this.getPlayerExposureList.forEach((t, e) => {
                    1 == t.runnerList.length &&
                      t.runnerList.forEach((e) => {
                        "BACK" == e.sideType
                          ? t.runnerList.push({
                              sideType: "LAY",
                              averageOdd: 0,
                              liability: 0,
                              stake: 0,
                            })
                          : "LAY" == e.sideType &&
                            t.runnerList.push({
                              sideType: "BACK",
                              averageOdd: 0,
                              profit: 0,
                              stake: 0,
                            }),
                          "YES" == e.sideType
                            ? t.runnerList.push({
                                sideType: "NO",
                                averageOdd: 0,
                                liability: 0,
                                stake: 0,
                              })
                            : "NO" == e.sideType &&
                              t.runnerList.push({
                                sideType: "YES",
                                averageOdd: 0,
                                profit: 0,
                                stake: 0,
                              });
                      }),
                      t.runnerList.sort((t, e) =>
                        t.sideType > e.sideType ? 1 : -1
                      ),
                      t.runnerList.map((t) => {
                        t.runs
                          ? (t.averageOdd = t.runs + "/" + t.averageOdd)
                          : "0" == t.runs &&
                            (t.averageOdd = t.runs + "/" + t.averageOdd);
                      });
                  }),
                  (this.loading = !1));
            })
            .catch((t) => {
              this.loading = !1;
            });
        }
        inhertitShowModal(t) {
          return this.object.getDOMInstance().showModal(t);
        }
        showPlayerBook(t) {
          t &&
            (this.getPlayerBookDetail(t),
            this.inhertitShowModal(this.modals.playerBook),
            this.handleAdminPlayerBook(t));
        }
        hidePlayerBook() {
          this.object.getDOMInstance().hideModal(this.modals.playerBook);
        }
        showCreditModal() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.creditref);
        }
        unsubscribeDataEvents() {
          this.clearfirebasetimeOut.forEach((t) => {
            clearTimeout(t);
          }),
            (this.clearfirebasetimeOut = []),
            clearTimeout(this.inplayApiTimeOut),
            this.object
              .getUtilInstance()
              .inspect()
              .log("Unsubscribe", "Data Events"),
            this.object
              .getUtilInstance()
              .isNullOrUndefined(this.broadCast.allSubscription.sseSubscribe) ||
              this.broadCast.allSubscription.sseSubscribe.unsubscribe();
        }
        getPinnedItems() {
          (this.pinnedItems.isPinned = !0),
            (this.pinnedItems.data =
              this.object
                .getUtilInstance()
                .parse(
                  this.object
                    .getUtilInstance()
                    .getStore(this.object.constant.STORAGE.pinned)
                ) || []);
        }
        getMobilePinnedItems() {
          (this.pinnedItems.isPinned = !0),
            (this.pinnedItems.data =
              this.object
                .getUtilInstance()
                .parse(
                  this.object
                    .getUtilInstance()
                    .getStore(this.object.constant.STORAGE.pinned)
                ) || []);
        }
        getDashboardPinnedItems() {
          (this.pinnedItems.isPinned = !1),
            (this.pinnedItems.data =
              this.object
                .getUtilInstance()
                .parse(
                  this.object
                    .getUtilInstance()
                    .getStore(this.object.constant.STORAGE.pinned)
                ) || []);
        }
        getLiveScore() {}
        getmarketStatus(t) {
          (this.mktIList = []),
            t.forEach((t) => {
              this.mktIList.push(t.marketId);
            }),
            this.unsubmktStatusAuth.push(
              this.fireStoreData
                .getMarketStatus(this.mktIList)
                .subscribe((e) => {
                  0 != e.length &&
                    t.forEach((t) => {
                      e.forEach((e, a) => {
                        t.marketId == e.marketId &&
                          ((t.status = e.status),
                          e.mType &&
                            "match odds" == e.mType.toLowerCase() &&
                            ((this.mktStatusOnRobot = e.status),
                            this.changeBookMakerStatusOnRobot()));
                      });
                    });
                })
            );
        }
        changeBookMakerStatusOnRobot() {
          (this.robotOn = !1),
            (this.robotRef = !1),
            (this.matchOddRobot = !1),
            this.getFancyMarketDataList.forEach((t) => {
              t.markets.forEach((t) => {
                t.fancyCategory ==
                  this.object.getConstants().FANCY.Bookmaker_Market &&
                  ((this.robotOn = t.robotOn),
                  (this.robotRef = t.robotRef),
                  (this.matchOddRobot = t.matchOddRobot)),
                  t.fancyCategory ==
                    this.object.getConstants().FANCY.Bookmaker_Market &&
                    t.matchOddRobot &&
                    (t.suspended =
                      !!t.suspended || "SUSPEND" == this.mktStatusOnRobot),
                  t.fancyCategory ==
                    this.object.getConstants().FANCY.Bookmaker_Disc &&
                    this.robotRef &&
                    ((t.suspended =
                      this.getFancyMarketDataList[0].markets[0].suspended),
                    (t.ballRunning =
                      this.getFancyMarketDataList[0].markets[0].ballRunning)),
                  t.fancyCategory ==
                    this.object.getConstants().FANCY.Bookmaker_Disc &&
                    this.robotRef &&
                    this.matchOddRobot &&
                    (t.suspended =
                      !!t.suspended || "SUSPEND" == this.mktStatusOnRobot);
              });
            });
        }
        setStreamObject(t) {
          if (0 == t.length || !t) return;
          if ("match odds" != t[0].betfair_data.mType.toLowerCase()) return;
          let e = Object.values(t[0].runners_name);
          switch (e.indexOf("The Draw")) {
            case 0:
              (this.object.streamObj.home = e[1]),
                (this.object.streamObj.away = e[2]);
              break;
            case 1:
              (this.object.streamObj.home = e[0]),
                (this.object.streamObj.away = e[2]);
              break;
            case 2:
              (this.object.streamObj.home = e[0]),
                (this.object.streamObj.away = e[1]);
            default:
              (this.object.streamObj.home = e[0]),
                (this.object.streamObj.away = e[1]);
          }
          window.localStorage.setItem(
            "stmObj",
            JSON.stringify(this.object.streamObj)
          );
        }
        getmatchSourceEventdetail() {
          let t = JSON.parse(
            this.object.getUtilInstance().getStore("matchoddsource")
          );
          (this.getRateSource = t),
            null == this.getRateSource &&
              (this.object.unsubscribFirebasesourceRate.unsubscribe(),
              this.object.onChangeSourceRateEvents()),
            this.unsubscribeOddsrc.length &&
              this.unsubscribeOddsrc.forEach((t) => t.unsubscribe()),
            this.unsubscribeOddsrc.push(
              this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.MATCHODDFIREBASE)
                .subscribe((t) => {
                  (this.getRateSource = t),
                    setTimeout(() => {
                      this.getMarketDataDetailsEvents(this.playerEventDetails);
                    }, 800);
                })
            );
        }
        getMarketDataDetailsEvents(t) {
          null != t &&
            null != this.getRateSource &&
            (clearInterval(this.matchoddSchedular),
            this.unsubscribeFirebasedata.length &&
              this.unsubscribeFirebasedata.forEach((t) => t.unsubscribe()),
            this.getRateSource.firebase
              ? ((this.mktDataList = []),
                t.forEach((t) => {
                  this.mktDataList.push(t.marketId);
                }),
                this.object.loginState.getIsLogin()
                  ? this.unsubscribeFirebasedata.push(
                      this.object.themeChange.betfair
                        ? this.fireStoreData
                            .getMarketsatsprateData(this.mktDataList)
                            .subscribe((t) => {
                              if (t && t.length < 0) return;
                              let e = r.mapDataInBetfairId(t);
                              (this.SSEMENUDATA = e),
                                this.handleMultiMktParsing();
                            })
                        : this.fireStoreData
                            .getMarketData(this.mktDataList)
                            .subscribe((t) => {
                              if (t && t.length < 0) return;
                              let e = r.mapDataInBetfairId(t);
                              (this.SSEMENUDATA = e),
                                this.handleMultiMktParsing();
                            })
                    )
                  : this.unsubscribeFirebasedata.push(
                      this.object.themeChange.betfair
                        ? this.fireStoreData
                            .getMarketsatsprateData(this.mktDataList)
                            .subscribe((t) => {
                              (t && t.length < 0) ||
                                setTimeout(() => {
                                  let e = r.mapDataInBetfairId(t);
                                  (this.SSEMENUDATA = e),
                                    this.handleMultiMktParsing(),
                                    this.unsubscribeFirebasedata.length &&
                                      this.unsubscribeFirebasedata.forEach(
                                        (t) => t.unsubscribe()
                                      );
                                }, 300);
                            })
                        : this.fireStoreData
                            .getMarketData(this.mktDataList)
                            .subscribe((t) => {
                              let e = r.mapDataInBetfairId(t);
                              setTimeout(() => {
                                (this.SSEMENUDATA = e),
                                  this.handleMultiMktParsing(),
                                  this.unsubscribeFirebasedata.length &&
                                    this.unsubscribeFirebasedata.forEach((t) =>
                                      t.unsubscribe()
                                    );
                              }, 300);
                            })
                    ))
              : this.getRateSource.firebase ||
                (this.object.loginState.getIsLogin()
                  ? (this.getMarketDataEventDetail(),
                    clearInterval(this.matchoddSchedular),
                    (this.matchoddSchedular = setInterval(() => {
                      this.schedularApiload && this.getMarketDataEventDetail();
                    }, 1100)))
                  : this.getMarketDataEventDetail()));
        }
        getMarketDataEventDetail() {
          var t =
            "src=SATSP&etid=" +
            (this.playerEventDetails[0]
              ? this.playerEventDetails[0].eventTypeId
              : "") +
            "&marketIds=" +
            this.getMarketId;
          (this.schedularApiload = !1),
            this.service
              .getMatchoddrate(
                this.object.getURLInstance().matchOddrate,
                t,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                if (((this.schedularApiload = !0), 0 == t.data.length)) return;
                let e = r.mapDataInBetfairId(t.data);
                (this.SSEMENUDATA = e), this.handleMultiMktParsing();
              })
              .catch((t) => {
                this.schedularApiload = !0;
              });
        }
        handleMultiMktParsing() {
          this.playerEventDetails &&
            this.playerEventDetails.length > 0 &&
            this.playerEventDetails.forEach((t, e) => {
              if (this.SSEMENUDATA) {
                if (
                  ((this.SSEMENU = this.SSEMENUDATA.find(
                    (e) => e.id == t.marketId
                  )),
                  null == this.SSEMENU)
                )
                  return;
                t.marketId == this.SSEMENU.id &&
                  ((t.betfairStatus = this.SSEMENU.mktStatus),
                  (this.playerEventDetails[e].index = []),
                  t.runners.forEach((t, a) => {
                    null == t.showRunner &&
                      this.playerEventDetails[e].index.push(a),
                      (this.playerEventDetails[e].mrketMatch = this.SSEMENU
                        .mktMatched
                        ? this.SSEMENU.mktMatched
                        : 0),
                      this.SSEMENU.rnrInf.find((e) => e.id == t.selectionId) &&
                        ((t.btb = this.SSEMENU.rnrInf.find(
                          (e) => e.id == t.selectionId
                        ).btb),
                        (t.btl = this.SSEMENU.rnrInf.find(
                          (e) => e.id == t.selectionId
                        ).btl),
                        (t.tv = this.SSEMENU.rnrInf.find(
                          (e) => e.id == t.selectionId
                        ).tv),
                        (this.playerEventDetails[e].runners[a] = t));
                  }));
              }
            });
        }
        getFirebaseMarketStatus() {
          var t;
          this.firebaseStatus.push(
            this.fireStoreData.getMarketStatusAll().subscribe((e) => {
              (t = e),
                this.object.dashboardData.children &&
                  this.object.dashboardData.children.forEach((e, a) => {
                    e.newChildren &&
                      e.newChildren.forEach((e, a) => {
                        if (e) {
                          var s = t.find((t) => t.marketId == e.marketId);
                          if (null == s) return;
                          e.marketId == s.marketId && (e.status = s.status);
                        }
                      });
                  });
            })
          );
        }
        getSportsBook() {
          this.unsubscribeFirebasedata.push(
            this.fireStoreData.getSportBookData(this.eventId).subscribe((t) => {
              this.primiumSportBook = t;
            })
          );
        }
        getmatchSourceInplay() {
          let t = JSON.parse(
            this.object.getUtilInstance().getStore("matchoddsource")
          );
          (this.getRateSource = t),
            null == this.getRateSource &&
              (this.object.unsubscribFirebasesourceRate.unsubscribe(),
              this.object.onChangeSourceRateEvents()),
            this.unsubscribeAllBrodcaster.push(
              this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.MATCHODDFIREBASE)
                .subscribe((t) => {
                  (this.getRateSource = t),
                    setTimeout(() => {
                      this.getMarketDataEvents();
                    }, 800);
                })
            );
        }
        getMarketDataEvents() {
          null != this.getRateSource &&
            (this.unsubscribeAllFirbasedata.length &&
              this.unsubscribeAllFirbasedata.forEach((t) => t.unsubscribe()),
            clearInterval(this.object.matchoddSchedularInplay),
            this.getRateSource.firebase
              ? this.object.loginState.getIsLogin()
                ? this.unsubscribeAllFirbasedata.push(
                    this.object.themeChange.betfair
                      ? this.fireStoreData
                          .getsatsprateGloabal()
                          .subscribe((t) => {
                            let e = r.mapDataInBetfairId(t);
                            (this.SSEMENUDATA = e),
                              this.handleLoadMenuClientParsing();
                          })
                      : this.fireStoreData.getBetfairData().subscribe((t) => {
                          let e = r.mapDataInBetfairId(t);
                          (this.SSEMENUDATA = e),
                            this.handleLoadMenuClientParsing();
                        })
                  )
                : this.unsubscribeAllFirbasedata.push(
                    this.object.themeChange.betfair
                      ? this.fireStoreData
                          .getsatsprateGloabal()
                          .subscribe((t) => {
                            if (0 == t.length) return;
                            let e = r.mapDataInBetfairId(t);
                            (this.SSEMENUDATA = e),
                              this.handleLoadMenuClientParsing(),
                              this.unsubscribeAllFirbasedata.length &&
                                this.unsubscribeAllFirbasedata.forEach((t) =>
                                  t.unsubscribe()
                                );
                          })
                      : this.fireStoreData.getBetfairData().subscribe((t) => {
                          if (0 == t.length) return;
                          let e = r.mapDataInBetfairId(t);
                          (this.SSEMENUDATA = e),
                            this.handleLoadMenuClientParsing(),
                            this.unsubscribeAllFirbasedata.length &&
                              this.unsubscribeAllFirbasedata.forEach((t) =>
                                t.unsubscribe()
                              );
                        })
                  )
              : this.getRateSource.firebase ||
                (this.object.loginState.getIsLogin()
                  ? (this.getMarketRateInplay(),
                    clearInterval(this.object.matchoddSchedularInplay),
                    (this.object.matchoddSchedularInplay = setInterval(() => {
                      this.schedularApiloadInplay && this.getMarketRateInplay();
                    }, 6e4)))
                  : (clearInterval(this.object.matchoddSchedularInplay),
                    this.getMarketRateInplay())));
        }
        getMarketRateInplay() {
          (this.schedularApiloadInplay = !1),
            this.service
              .getMatchoddrate(
                this.object.getURLInstance().getAllFeed,
                "src=SATSP",
                this.headers()
              )
              .toPromise()
              .then((t) => {
                if (((this.schedularApiloadInplay = !0), 0 == t.data.length))
                  return;
                let e = r.mapDataInBetfairId(t.data);
                (this.SSEMENUDATA = e), this.handleLoadMenuClientParsing();
              })
              .catch((t) => {
                this.schedularApiloadInplay = !0;
              });
        }
        handleLoadMenuClientParsing() {
          this.object.dashboardData.children &&
            this.object.dashboardData.children.length > 0 &&
            this.object.dashboardData.children.forEach((t, e) => {
              t.newChildren &&
                t.newChildren.forEach((t, a) => {
                  if (t) {
                    if (t.runners.length > 3) return;
                    if (this.SSEMENUDATA) {
                      if (
                        ((this.SSEMENU = this.SSEMENUDATA.find(
                          (e) => e.id == t.marketId
                        )),
                        null == this.SSEMENU)
                      )
                        return;
                      t.marketId == this.SSEMENU.id &&
                        ((this.object.dashboardData.children[e].newChildren[
                          a
                        ].index = []),
                        t.runners.forEach((t, s) => {
                          (this.object.dashboardData.children[e].newChildren[
                            a
                          ].betfairStatus = this.SSEMENU.mktStatus),
                            null == t.showRunner &&
                              this.object.dashboardData.children[e].newChildren[
                                a
                              ].index.push(s),
                            3 == t.sortPriority &&
                              this.object.dashboardData.children[e].newChildren[
                                a
                              ].index.push(s),
                            this.SSEMENU.rnrInf.find(
                              (e) => e.id == t.selectionId
                            ) &&
                              ((t.btb = this.SSEMENU.rnrInf.find(
                                (e) => e.id == t.selectionId
                              ).btb),
                              (t.btl = this.SSEMENU.rnrInf.find(
                                (e) => e.id == t.selectionId
                              ).btl),
                              (t.tv = this.SSEMENU.rnrInf.find(
                                (e) => e.id == t.selectionId
                              ).tv),
                              (this.object.dashboardData.children[
                                e
                              ].newChildren[a].runners[s] = t));
                        }));
                    } else
                      null != t.runners &&
                        t.runners.forEach((t, s) => {
                          3 == t.showRunner &&
                            this.object.dashboardData.children[e].newChildren[
                              a
                            ].index.push(s),
                            (this.object.dashboardData.children[e].newChildren[
                              a
                            ].runners[s] = t);
                        });
                  }
                });
            });
        }
        ___masterMenuCore__handler(t) {
          let e =
              this.object
                .getUtilInstance()
                .parse(
                  this.object
                    .getUtilInstance()
                    .getStore(this.object.constant.STORAGE.pinned)
                ) || [],
            a = !1,
            s = !1,
            i = !1;
          t.data.children &&
            (t.data.children.forEach((t, n) => {
              let r = !1,
                o = !1,
                h = !1;
              (t.data.pinned = !1),
                t.children.forEach((n) => {
                  let c = this.calculateCurrencyRateMatchood(n);
                  (n.minStake = c.minstake),
                    (n.maxStake = c.maxStake),
                    (n.betfairStatus = "OPEN"),
                    n.inPlay && ((r = !0), (a = !0)),
                    n.today && ((o = !0), (s = !0)),
                    n.tomorrow && ((h = !0), (i = !0)),
                    -1 !== e.indexOf(n.marketId) &&
                      ((n.pinned = !0), (t.pinned = !0));
                }),
                (t.data.inPlay = r),
                (t.data.today = o),
                (t.data.tomorrow = h),
                (t.data.pinned = t.pinned);
            }),
            (t.data.inPlay = a),
            (t.data.today = s),
            (t.data.tomorrow = i),
            this.sportfilter());
        }
        sportfilter() {
          this.object.dashboardData.children &&
            (this.object.dashboardData.children.forEach((t, e) => {
              var a = t.children.filter((t) => t[this.cardType]);
              (this.cardType != this.object.getConstants().MKT_TABS.today &&
                this.cardType !=
                  this.object.getConstants().MKT_TABS.tomorrow) ||
                a.sort((t, e) =>
                  t.marketTime < e.marketTime
                    ? -1
                    : t.marketTime > e.marketTime
                    ? 1
                    : 0
                ),
                (t.newChildren = a);
            }),
            this.cardType == this.object.getConstants().MKT_TABS.today
              ? this.updatetimeToday()
              : this.clearintervalltime &&
                clearInterval(this.clearintervalltime),
            this.handleLoadMenuClientParsing());
        }
        updatetimeToday() {
          this.clearintervalltime && clearInterval(this.clearintervalltime),
            (this.clearintervalltime = setInterval(() => {
              this.object.dashboardData.children.forEach((t, e) => {
                t.newChildren.forEach((t, e) => {
                  t.timeRemaining = t.timeRemaining - 6e4;
                });
              });
            }, 6e4));
        }
        getMasterMenuParsing() {
          this.object.masterMenu.children || this.getMasterMenu();
        }
        getMasterMenu() {
          if (this.object.isManualMarektRoute) return;
          if (
            "profile" == this.object.getRouterInstance().url.split("/")[2] ||
            "market-analysis" ==
              this.object.getRouterInstance().url.split("/")[2]
          )
            return;
          let t,
            e = this.object.getURLInstance().playerLoadMenu;
          if (this.object.getLoginInstance().state.canAddMarket) {
            if (
              this.object.getLoginInstance().state.isSUpandAdmin ||
              this.object.getLoginInstance().state.isBrandManager ||
              this.object.getLoginInstance().state.isMaster
            )
              return;
            (e = this.object.getURLInstance().loadMenu),
              (t =
                "betfair" == this.object.Market
                  ? this.object.getURLInstance().SOURCETYPEBETFAIR
                  : "satsp" == this.object.Market
                  ? this.object.getURLInstance().SOURCETYPESATSP
                  : this.object.getURLInstance().ICE),
              this.service
                .get(e, t, this.headers())
                .toPromise()
                .then(
                  (t) => {
                    t.data.children.forEach((t) => {
                      "4" == t.data.betfairId &&
                        t.children.forEach((t) => {
                          t.children.forEach((t) => {
                            t.data.wicketMarket = !0;
                          });
                        });
                    });
                    let e = this.masterMenu.childMenu;
                    this.getInnerMenuList(t.data),
                      (this.object.compareArrays(
                        e,
                        this.masterMenu.childMenu
                      ) &&
                        0 != e.length) ||
                        ((this.masterMenu.orgLoadMenu = t.data),
                        (this.object.masterMenu = t.data),
                        this.getParentMenu());
                  },
                  (t) => {
                    this.setError(t);
                  }
                );
          }
        }
        getPlayerMenuParsing() {
          this.object.masterMenu.children ||
            setTimeout(() => {
              this.getMasterMenuData();
            }, 1600);
        }
        getMasterMenuData() {
          let t = this.object.getURLInstance().playerSidebarMenu;
          this.object.isAdminLogin() ||
            this.service
              .whitelabelget(
                t,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  this.object.masterMenu = t.data;
                },
                (t) => {
                  this.setError(t);
                }
              );
        }
        getSportData() {
          this.service
            .whitelabelget(
              this.object.getURLInstance().sportDashboard,
              this.object.getURLInstance().EMPTY_PARAM,
              this.headers()
            )
            .toPromise()
            .then(
              (t) => {
                (this.loadingsession = !1),
                  this.getCurrencyRate(),
                  setTimeout(() => {
                    this.currencyRate
                      ? ((this.object.dashboardData = t.data),
                        this.virtualGamesInplay(),
                        this.___masterMenuCore__handler(t),
                        this.handleLoadMenuClientParsing())
                      : this.currencyRate ||
                        setTimeout(() => {
                          this.getCurrencyRate(),
                            (this.object.dashboardData = t.data),
                            this.virtualGamesInplay(),
                            this.___masterMenuCore__handler(t),
                            this.handleLoadMenuClientParsing();
                        }, 1400);
                  }, 30);
              },
              (t) => {
                (this.loadingsession = !1), this.setError(t);
              }
            );
        }
        getInnerMenuList(t) {
          (this.masterMenu.childMenu = []),
            (this.commentList = []),
            (this.searchEventLsit = []),
            t.children.forEach((t) => {
              t.children &&
                t.children.forEach((e) => {
                  this.commentList.push({
                    parent: t.data,
                    data: e.data,
                  }),
                    e.children &&
                      e.children.forEach((t) => {
                        this.searchEventLsit.push({
                          parent: e.data,
                          data: t.data,
                        }),
                          t.children.forEach((t) => {});
                      });
                });
            }),
            (this.masterMenu.childMenu = this.commentList.concat(
              this.searchEventLsit
            )),
            (this.object.searchEventList = this.masterMenu.childMenu),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.SEARCHEVENTS,
              this.masterMenu.childMenu
            );
        }
        getInnerMenuListForPlayer(t) {
          this.object.getRouterInstance().url.split("/")[3] !=
            this.object.getConstants().PNL.SPECIALMARKETPARAM &&
            ((this.masterMenu.childMenu = []),
            t.children.forEach((t) => {
              t.children &&
                t.children.forEach((t) => {
                  t.children &&
                    t.children.forEach((t) => {
                      this.masterMenu.childMenu.push(t);
                    });
                });
            }),
            (this.object.searchEventList = this.masterMenu.childMenu),
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.SEARCHEVENTS,
              this.masterMenu.childMenu
            ));
        }
        getPlayerBookDetail(t) {
          let e,
            a = t.id;
          return (
            (e = this.object.specialMarket
              ? this.object.getConstants().PNL.SPECIAL_MARKET
              : this.object.getConstants().PNL.SPORTS),
            new Promise((s, i) => {
              this.object.getLoginInstance().state.isSUpandAdmin ||
                this.object.getLoginInstance().state.isBrandManager ||
                this.object.getLoginInstance().state.isMaster ||
                this.object.getLoginInstance().state.isTrManager ||
                this.object.getLoginInstance().state.isOwner ||
                (this.object.loginState.getIsLogin()
                  ? t.fancyCategory ==
                      this.object.getConstants().FANCY.Bookmaker_Market ||
                    t.fancyCategory ==
                      this.object.getConstants().FANCY.Bookmaker_Market_1 ||
                    t.fancyCategory ==
                      this.object.getConstants().FANCY.Fancy_Market1 ||
                    t.fancyCategory ==
                      this.object.getConstants().FANCY.Bookmaker_Disc
                    ? i("User not Login")
                    : this.service
                        .get(
                          this.object.getURLInstance().getPlayerBookDetail,
                          this.object.getConstants().PARAMSID.marketId +
                            a +
                            "&" +
                            this.object.getConstants().PARAMSID.gameType +
                            e,
                          this.headers()
                        )
                        .toPromise()
                        .then((t) => {
                          (this.playerBookDetails = t.data.playerBookDetails),
                            s(this.playerBookDetails);
                        })
                        .catch((t) => {
                          i(t);
                        })
                  : i("User not Login"));
            })
          );
        }
        getAll(t) {
          this.object.getDOMInstance().closeAllAccordian(),
            (this.commonTabs = t),
            (this.cardType = this.object.getConstants().MKT_TABS.inPlay),
            (this.object.cardType = this.object.getConstants().MKT_TABS.inPlay),
            this.commonTabs == this.object.getConstants().MKT_TABS.all &&
              (this.eventList = this.object.eventList = {}),
            this.sportfilter();
        }
        getAllToday(t) {
          (this.loading = !0),
            (this.cardType = this.object.getConstants().MKT_TABS.today),
            (this.object.cardType = this.object.getConstants().MKT_TABS.today),
            (this.commonTabs = t),
            this.object.getDOMInstance().closeAllAccordian(),
            (this.eventList = this.object.eventList = {}),
            this.sportfilter(),
            setTimeout(() => {
              this.loading = !1;
            }, 200);
        }
        getAllTomorrow(t) {
          (this.loading = !0),
            this.object.getDOMInstance().closeAllAccordian(),
            (this.commonTabs = t),
            (this.cardType = this.object.getConstants().MKT_TABS.tomorrow),
            (this.object.cardType =
              this.object.getConstants().MKT_TABS.tomorrow),
            (this.eventList = this.object.eventList = {}),
            this.sportfilter(),
            setTimeout(() => {
              this.loading = !1;
            }, 200);
        }
        getEventStraming(t) {
          this.unsubscribeLiveStream = this.fireStoreData
            .getEventToStreamData(t)
            .subscribe((t) => {
              t &&
                (t.url &&
                  ((this.object.isnwicketId = t.score2),
                  setTimeout(() => {
                    this.object
                      .getDOMInstance()
                      .getScoreSportRadar(Number(t.url), t.score2);
                  }, 2e3)),
                "demo1" != this.object.getLoginInstance().state.userName &&
                  "demo2" != this.object.getLoginInstance().state.userName &&
                  "demo3" != this.object.getLoginInstance().state.userName &&
                  0 != this.object.getLoginInstance().state.isPlayer &&
                  null != t &&
                  t.streamName &&
                  "CLOSED" != t.status &&
                  (this.object.specialMarket ||
                    (t.streamName &&
                      setTimeout(() => {
                        let e = this.object.getUtilInstance().getStore("ipKey"),
                          a = `chid=${t.streamName}&ip=${e}`;
                        (this.videoUrlLink =
                          this.object.getURLInstance().lotusStreamUrl + a),
                          (this.object.showLiveTvButton = !0);
                      }, 2e3))));
            });
        }
        handleSearchEvent() {
          (this.searchEvent = []),
            this.service
              .whitelabelget(
                this.object.getURLInstance().getSearchEventNames,
                "isSport=true",
                this.headers()
              )
              .toPromise()
              .then((t) => {
                t.data.children.forEach((t) => {
                  delete t.customized,
                    delete t.eventStatus,
                    this.searchEvent.push(t);
                }),
                  this.object
                    .getUtilInstance()
                    .storeState(
                      this.object.getConstants().STORAGE.searchEvent,
                      JSON.stringify(this.searchEvent)
                    );
              });
        }
        showSplMktRules() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.rules),
            this.service
              .get(
                this.object.getURLInstance().getEventRules,
                this.object.getConstants().PARAMSID.eventId + this.eventId,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                (this.eventRules = t.data.rules[this.eventId]),
                  this.eventRules ||
                    (this.eventRules = "No Rules for the Event!");
              });
        }
        trackByMarket(t, e) {
          return e.id;
        }
        trackByCategory(t, e) {
          return e.categoryDetails.id;
        }
        handleAdminPlayerBook(t) {
          let e,
            a,
            s,
            i = window.localStorage.getItem("prvType");
          if (!this.object.isAdminLogin()) return;
          this.object.getLoginInstance().state.isOwner ||
          this.object.getLoginInstance().state.isTrManager ||
          this.object.getLoginInstance().state.isTrader
            ? ((a = this.object.getURLInstance().getFancyOwnerBookDetails),
              (this.ptRateParam = ""))
            : ((this.ptRateParam =
                this.object.getConstants().PARAMSID.ptRate +
                this.object.defaultRate +
                this.object.getConstants().PARAMSID.showOnRates +
                this.object.showOnRates),
              (a = i
                ? this.object.getURLInstance()
                    .getFancyPlayerBookDetailsAssociate
                : this.object.getURLInstance().getFancyPlayerBookDetails)),
            (s = this.paramCurrency
              ? this.paramCurrency
              : this.object
                  .getUtilInstance()
                  .getStore(this.object.getConstants().STORAGE.currency));
          let n = this.object.getLoginInstance().state._id;
          e = this.object.specialMarket
            ? this.object.getConstants().PNL.SPECIAL_MARKET
            : this.object.getConstants().PNL.SPORTS;
          let r =
            this.object.getConstants().PARAMSID.marketId +
            t.marketId +
            this.object.getConstants().PARAMSID.currency +
            s +
            "&" +
            this.object.getConstants().PARAMSID.userId +
            n +
            "&" +
            this.object.getConstants().PARAMSID.gameType +
            e +
            this.ptRateParam;
          this.object.getLoginInstance().state.isPlayer ||
            this.service
              .adminget(a, r, this.headers())
              .toPromise()
              .then((t) => {
                this.playerBookDetails = t.data.playerBookDetails;
              });
        }
        getParentMenu() {
          this.object.getMenuData.subscribe((t) => {
            var e = [];
            t.children
              ? ((this.commonTabs = t.data.name),
                "2" == t.data.type
                  ? ((this.masterMenu.selectedParentMenu = t.parentMenu),
                    e.push(t),
                    (this.eventItems = e))
                  : ((this.masterMenu.selectedParentMenu = t.data),
                    (this.eventItems = t.children)))
              : ((this.masterMenu.selectedParentMenu = {}),
                (this.eventItems = []));
          });
        }
        handleCompetitonList(t) {
          (this.listCompetitionEventMkt = []),
            (this.loading = !0),
            (t.sourceType =
              "betfair" == this.object.Market
                ? "betfair"
                : "satsp" == this.object.Market
                ? "satsp"
                : "ICE"),
            this.service
              .adminpost(
                this.object.getURLInstance().listCompetitions,
                t,
                this.headers()
              )
              .subscribe(
                (t) => {
                  (t.data.competitionList.newData =
                    t.data.competitionList.newData.map((t) =>
                      Object.assign({}, t, {
                        active: !0,
                        customized: !1,
                        checked: !1,
                        inputType: "radio",
                      })
                    )),
                    (t.data.competitionList.addedData =
                      t.data.competitionList.addedData.map((t) =>
                        Object.assign({}, t, {
                          active: !0,
                          customized: !1,
                          checked: !0,
                          inputType: "radio",
                        })
                      )),
                    (this.listCompetitionEventMkt = t.data.competitionList),
                    this.listCompetitionEventMkt.newData.sort((t, e) =>
                      t.name > e.name ? 1 : -1
                    ),
                    this.listCompetitionEventMkt.addedData.sort((t, e) =>
                      t.name > e.name ? 1 : -1
                    ),
                    (this.isMarketType = !1),
                    (this.selectedCompetition = {
                      parent: this.masterMenu.selectedChildMenu,
                    }),
                    (this.loading = !1);
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        handleEventList(t) {
          (this.listCompetitionEventMkt = []),
            (this.loading = !0),
            (t.sourceType =
              "betfair" == this.object.Market
                ? "betfair"
                : "satsp" == this.object.Market
                ? "satsp"
                : "ICE"),
            this.service
              .adminpost(
                this.object.getURLInstance().listEvents,
                t,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  (t.data.eventList.newData = t.data.eventList.newData.map(
                    (t) =>
                      Object.assign({}, t, {
                        active: !0,
                        customized: !1,
                        checked: !1,
                        inputType: "radio",
                      })
                  )),
                    (t.data.eventList.addedData =
                      t.data.eventList.addedData.map((t) =>
                        Object.assign({}, t, {
                          active: !0,
                          customized: !1,
                          checked: !0,
                          inputType: "radio",
                        })
                      )),
                    (this.listCompetitionEventMkt = t.data.eventList),
                    this.listCompetitionEventMkt.newData.sort((t, e) =>
                      t.name > e.name ? 1 : -1
                    ),
                    this.listCompetitionEventMkt.addedData.sort((t, e) =>
                      t.name > e.name ? 1 : -1
                    ),
                    (this.isMarketType = !1),
                    (this.masterMenu.selectedChildMenu =
                      t.data.eventList.parentData),
                    (this.selectedCompetition = {
                      parent: this.masterMenu.selectedChildMenu,
                    }),
                    (this.loading = !1);
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        handleAllList(t) {
          if (
            (t.action &&
              ((this.isdisableDateInput = !0),
              (this.updateMenuList = t.childMenu.data),
              (this.maxStakeValue = t.childMenu.data.maxStake),
              (this.maxStakevalidation = !1),
              (this.updateMenuList.eventDateTime = this.changeDateFormat(
                this.updateMenuList.eventDateTime
              ))),
            (t = t.childMenu).data)
          )
            switch (
              ((this.masterMenu.selectedChildMenu = t.data), t.data.type)
            ) {
              case this.masterMenu.menuTypes.competition:
                (this.eventTypeId = {
                  eventTypeIds: [t.data.betfairId],
                }),
                  this.handleCompetitonList(this.eventTypeId);
                break;
              case this.masterMenu.menuTypes.events:
                (this.eventTypeId = {
                  competitionIds: [t.data.betfairId],
                }),
                  this.handleEventList(this.eventTypeId);
                break;
              case this.masterMenu.menuTypes.market:
                (this.eventTypeId = {
                  eventIds: [t.data.betfairId],
                }),
                  this.handleMarketList(this.eventTypeId, t.data);
            }
        }
        handleMarketList(t, e) {
          "VOIDED" != e.eventStatus
            ? ((t.sourceType =
                "betfair" == this.object.Market
                  ? "betfair"
                  : "satsp" == this.object.Market
                  ? "satsp"
                  : "ICE"),
              (this.listCompetitionEventMkt = []),
              this.service
                .adminpost(
                  this.object.getURLInstance().listMarket,
                  t,
                  this.headers()
                )
                .toPromise()
                .then(
                  (t) => {
                    t.data.marketCatalogues.newData &&
                      t.data.marketCatalogues.addedData &&
                      ((t.data.marketCatalogues.newData =
                        t.data.marketCatalogues.newData.map((t) =>
                          Object.assign({}, t, {
                            name: t.marketType,
                            active: !0,
                            customized: !1,
                            checked: !1,
                            inputType: "checkbox",
                          })
                        )),
                      (t.data.marketCatalogues.addedData =
                        t.data.marketCatalogues.addedData.map((t) =>
                          Object.assign({}, t, {
                            name: t.marketType,
                            active: !0,
                            customized: !1,
                            inputType: "checkbox",
                          })
                        )),
                      (this.listCompetitionEventMkt = t.data.marketCatalogues),
                      this.listCompetitionEventMkt.newData.sort((t, e) =>
                        t.name > e.name ? 1 : -1
                      ),
                      this.listCompetitionEventMkt.addedData.sort((t, e) =>
                        t.name > e.name ? 1 : -1
                      ),
                      this.listCompetitionEventMkt.newData.forEach((t) => {
                        "MATCH_ODDS" == t.name && (this.isMatch_odds = !1);
                      }),
                      (this.isMarketType = !0),
                      (this.masterMenu.selectedChildMenu =
                        t.data.marketCatalogues.parentData),
                      (this.selectedCompetition = {
                        parent: this.masterMenu.selectedChildMenu,
                      }),
                      (this.loading = !1),
                      (this.checkedCbVtoPL = !1));
                  },
                  (t) => {
                    (this.loading = !1),
                      (this.checkedCbVtoPL = !1),
                      this.setError(t);
                  }
                ))
            : this.object.getDOMInstance().error("This event is Voided");
        }
        changeDateFormat(t) {
          if (t.indexOf("T") > 0) {
            var e = t,
              a = e.substring(8, 10),
              s = e.substring(5, 7),
              i = e.substring(0, 4);
            if ("" == e.substring(16, 19))
              var n = a + "/" + s + "/" + i + " " + e.substring(11, 16) + ":00";
            else n = a + "/" + s + "/" + i + " " + e.substring(11, 19);
            return n;
          }
          return t;
        }
        handleSelectedOptions() {
          return this.listCompetitionEventMkt.newData.filter((t) => t.checked);
        }
        handleUpdateMenu() {
          2 == this.updateMenuList.type &&
            (this.updateMenuList.eventDateTime = null),
            (this.updateMenuList.eventDateTime =
              "" == this.object.getDOMInstance().modal.getDateRange.startDate
                ? this.updateMenuList.eventDateTime
                : this.object.getDOMInstance().modal.getDateRange.startDate),
            (this.selectedCompetition =
              2 == this.updateMenuList.type || 3 == this.updateMenuList.type
                ? {
                    parent: this.masterMenu.prevSelectedChildMenu,
                    childrenData: [this.updateMenuList],
                  }
                : {
                    parent: this.masterMenu.prevSelectedChildMenu,
                    childrenData: this.updateMenuList,
                  }),
            (this.loading = !0),
            this.service
              .adminpost(
                this.object.getURLInstance().updateMenu,
                this.selectedCompetition,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  (this.loading = !1),
                    this.setSuccess(t),
                    this.object
                      .getDOMInstance()
                      .success("Updated Successfully"),
                    this.getMasterMenu(),
                    (this.editList = !1),
                    (this.checkedCbVtoPL = !1),
                    this.selectedCompetition.childrenData[0].marketId &&
                      ((this.addList = !1), (this.showIcon = !1));
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        handleSaveMenu() {
          (this.selectedCompetition = {
            parent: this.masterMenu.selectedChildMenu,
            childrenData: this.handleSelectedOptions(),
          }),
            this.selectedCompetition.childrenData.length < 1
              ? this.object.getDOMInstance().error("Please Select From List")
              : ((this.loading = !0),
                this.service
                  .adminpost(
                    this.object.getURLInstance().saveMenu,
                    this.selectedCompetition,
                    this.headers()
                  )
                  .toPromise()
                  .then(
                    (t) => {
                      (this.masterMenu.selectedChildMenu =
                        this.selectedCompetition.childrenData[0]),
                        this.setSuccess(t),
                        2 == this.selectedCompetition.childrenData[0].type
                          ? ((this.eventTypeId = {
                              competitionIds: [
                                this.selectedCompetition.childrenData[0]
                                  .betfairId,
                              ],
                            }),
                            this.eventBreadCrumb.push(
                              this.masterMenu.selectedChildMenu.name
                            ),
                            this.handleEventList(this.eventTypeId))
                          : 3 ==
                              this.selectedCompetition.childrenData[0].type &&
                            ((this.eventTypeId = {
                              eventIds: [
                                this.selectedCompetition.childrenData[0]
                                  .betfairId,
                              ],
                            }),
                            this.eventBreadCrumb.push(
                              this.masterMenu.selectedChildMenu.name
                            ),
                            this.handleMarketList(
                              this.eventTypeId,
                              this.masterMenu.selectedChildMenu
                            )),
                        this.getMasterMenu(),
                        (this.IsSelected = !1),
                        (this.searchModel = ""),
                        this.object
                          .getDOMInstance()
                          .success("Added Successfully"),
                        (this.selectedCompetition = {
                          parent: this.masterMenu.selectedChildMenu,
                        }),
                        (this.loading = !1);
                    },
                    (t) => {
                      (this.loading = !1), this.setError(t);
                    }
                  ),
                3 == this.selectedCompetition.parent.type &&
                  ((this.addList = !1), (this.showIcon = !1)));
        }
        handleMenuListClick(t, e = null, a = null, s = null, i = !0) {
          this.object.isAdminLogin() && this.handleAdminMenuListClick(t, e, a);
        }
        handleAdminMenuListClick(t, e, a) {
          this.object.getData(t),
            (this.commonTabs = null == e ? t.data.name : e),
            (this.masterMenu.selectedChildMenu = t),
            this.unsubscribeAllBrodcaster.length &&
              this.unsubscribeAllBrodcaster.forEach((t) => t.unsubscribe()),
            this.unsubscribeAllBrodcaster.push(
              this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.CHILDMENU)
                .subscribe(
                  (t) => {
                    (this.eventBreadCrumb = []),
                      t.action == this.object.getConstants().ACTIONS.ADD
                        ? (this.eventBreadCrumb.push(t.childMenu.data.name),
                          3 == t.childMenu.data.type &&
                            (this.masterMenu.prevSelectedChildMenu =
                              t.childMenu.data),
                          this.handleAllList(t),
                          (this.addList = !0),
                          (this.showIcon = !1),
                          (this.editList = !1),
                          (this.IsSelected = !1),
                          (this.listCompetitionEventMkt = []))
                        : ((this.updateMenuList = null),
                          (this.masterMenu.prevSelectedChildMenu =
                            t.childMenu.parentMenu),
                          (this.editList = !0),
                          (this.addList = !1),
                          (this.showIcon = !1),
                          (this.IsSelected = !1),
                          (this.checkedCbVtoPL = !0),
                          this.handleAllList(t));
                  },
                  (t) => {
                    this.setError(t);
                  }
                )
            );
        }
        handleSelectionChangeRadio(t) {
          (this.listCompetitionEventMkt.newData =
            this.listCompetitionEventMkt.newData.map((t) =>
              Object.assign({}, t, {
                checked: !1,
              })
            )),
            (t.checked = !t.checked);
          let e = this.listCompetitionEventMkt.newData.findIndex(
            (e) => ((this.IsSelected = t.checked), e.betfairId == t.betfairId)
          );
          this.listCompetitionEventMkt.newData[e] = t;
        }
        handleSelectionChangeCheckBox(t) {
          t.checked = !t.checked;
          let e = this.listCompetitionEventMkt.newData.findIndex(
            (e) => ((this.IsSelected = t.checked), e.marketId == t.marketId)
          );
          this.listCompetitionEventMkt.newData[e] = t;
        }
        handleSelectionChange(t, e = 0) {
          "radio" == t.inputType
            ? this.handleSelectionChangeRadio(t)
            : this.handleSelectionChangeCheckBox(t);
        }
        canBet(t) {
          (t.canBet = !t.canBet),
            this.listCompetitionEventMkt.addedData.findIndex((e) => {
              if (e.marketId == t.marketId) {
                this.checkedCbVtoPL = !0;
                let e = this.listMarketArray.findIndex(
                  (e) => e.marketId == t.marketId
                );
                e < 0
                  ? this.listMarketArray.push(t)
                  : (this.listMarketArray[e].canBet = t.canBet);
              }
            }),
            (this.updateMenuList = this.listMarketArray);
        }
        visibleToPlayer(t) {
          (t.visibleToPl = !t.visibleToPl),
            this.listCompetitionEventMkt.addedData.findIndex((e) => {
              if (e.marketId == t.marketId) {
                this.checkedCbVtoPL = !0;
                let e = this.listMarketArray.findIndex(
                  (e) => e.marketId == t.marketId
                );
                e < 0
                  ? this.listMarketArray.push(t)
                  : (this.listMarketArray[e].visibleToPl = t.visibleToPl);
              }
              this.updateMenuList = this.listMarketArray;
            });
        }
        handleMarketSelChange(t, e = 0) {
          "2" == t.type && 1 == t.checked
            ? ((this.eventTypeId = {
                competitionIds: [t.betfairId],
              }),
              this.handleEventList(this.eventTypeId),
              (this.masterMenu.selectedChildMenu = t),
              this.eventBreadCrumb.push(this.masterMenu.selectedChildMenu.name),
              (this.IsSelected = !1))
            : "3" == t.type &&
              1 == t.checked &&
              ((this.eventTypeId = {
                eventIds: [t.betfairId],
              }),
              this.handleMarketList(this.eventTypeId, t),
              (this.masterMenu.selectedChildMenu = t),
              (this.masterMenu.prevSelectedChildMenu = t),
              this.eventBreadCrumb.push(this.masterMenu.selectedChildMenu.name),
              (this.IsSelected = !1)),
            (this.searchModel = "");
        }
        cancelMenu() {
          (this.updateMenuList = null), (this.editList = !1);
        }
        appDestroyed() {
          this.unsubscribeDataEvents();
        }
        cancelMktSaveMenu() {
          (this.editList = !1), (this.addList = !1), (this.showIcon = !1);
        }
        getComfirm(t) {
          (this.voidEventName = t.name),
            "OPEN" == t.eventStatus
              ? this.object.getDOMInstance().showModal("void-confirmbox")
              : "CLOSED" == t.eventStatus
              ? this.object.getDOMInstance().error("Event is already closed!")
              : "VOIDED" == t.eventStatus &&
                this.object.getDOMInstance().error("Event is already voided!");
        }
        voidMrketEvent(t) {
          this.loading = !0;
          var e = {
            eventId: t.betfairId,
          };
          this.service
            .adminpost(
              this.object.getURLInstance().voidStatusOfEvent,
              e,
              this.headers({
                "x-timeZone": this.timeZoneName,
              })
            )
            .toPromise()
            .then((t) => {
              t &&
                ((this.loading = !1),
                this.setSuccess(t),
                this.object.getDOMInstance().success("Event void successfully"),
                this.object.getDOMInstance().hideModal("void-confirmbox"),
                this.getMasterMenu(),
                (this.editList = !1));
            })
            .catch((t) => {
              (this.loading = !1), this.setError(t);
            });
        }
        handleRedirectMenu(t) {
          if (t.data.type > this.object.getConstants().MKT_TABS.nDepthData) {
            let e =
              this.object.getUI_URL().user.root +
              this.object.getUI_URL().user.eventDetail +
              "/" +
              t.children[0].data.marketId;
            this.object.getRouterInstance().navigate([e]);
          }
        }
        doSomething(t) {
          this.object
            .getUtilInstance()
            .inspect()
            .log("Window Before Unload", "Firing window closed event"),
            this.appDestroyed();
        }
        isActive(t) {
          "true" == t
            ? ((this.updateMenuList.active = !0), (this.checkedCbVtoPL = !0))
            : "false" == t &&
              ((this.updateMenuList.active = !1), (this.checkedCbVtoPL = !0));
        }
        isCustomized(t) {
          "true" == t
            ? ((this.updateMenuList.customized = !0),
              (this.checkedCbVtoPL = !0))
            : "false" == t &&
              ((this.updateMenuList.customized = !1),
              (this.checkedCbVtoPL = !0));
        }
        changeMarketTab(t, e) {
          (this.object.commonCatName = t),
            (this.object.catName = null),
            this.filteFancyMarketData();
        }
        filteFancyMarketData() {
          (this.object.fancyCategoryExist = !0),
            this.getFancyMarketDataList.forEach((t) => {
              t.categoryDetails.catName == this.object.commonCatName &&
                ((this.object.catName = this.object.commonCatName),
                (t.khadoMarket = t.markets),
                (this.object.fancyCategoryExist = !1));
            });
        }
        closetoggleMenu() {
          this.object.send(!1);
        }
        CommingSoonGame(t) {
          this.object.getDOMInstance().showModal(t);
        }
        maxMktFromDropDown(t) {
          this.updateMenuList.maxMktStake = t.target.value;
        }
        betDelayDropDown(t) {
          this.updateMenuList.orderPxDelay = t.target.value;
        }
        maxStakeFromDropdown(t) {
          this.updateMenuList.maxStake = t.target.value;
        }
        favouriteMarketPin() {
          this.getFancyMarketDataList.forEach((t, e) => {
            (t.categoryDetails.catName !=
              this.object.getConstants().FANCY.fancy &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.meter &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.khado &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.playerPerformace &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.luckyNumMarket) ||
              (t.markets.map((t, e) => {
                var a = this.pinMrketId.find((e) => e == t.id);
                t.fvrt = !!a;
              }),
              t.markets.sort((t, e) =>
                t.star > e.star ? -1 : t.star < e.star ? 1 : 0
              ));
          });
        }
        favouriteMarketunPin() {
          this.getFancyMarketDataList.forEach((t, e) => {
            (t.categoryDetails.catName !=
              this.object.getConstants().FANCY.fancy &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.meter &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.khado &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.playerPerformace &&
              t.categoryDetails.catName !=
                this.object.getConstants().FANCY.luckyNumMarket) ||
              (t.markets.map((t) => {
                this.pinMrketId.find((e) => e == t.id)
                  ? (t.fvrt = !0)
                  : ((t.fvrt = !1), (t.star = 1));
              }),
              t.markets.sort((t, e) =>
                t.index > e.index ? 1 : t.index < e.index ? -1 : 0
              ),
              t.markets.sort((t, e) =>
                t.star > e.star ? -1 : t.star < e.star ? 1 : 0
              ));
          });
        }
        favouritePin(t, e) {
          if (
            (this.getFancyMarketDataList.forEach((a, s) => {
              (a.categoryDetails.catName !=
                this.object.getConstants().FANCY.fancy &&
                a.categoryDetails.catName !=
                  this.object.getConstants().FANCY.meter &&
                a.categoryDetails.catName !=
                  this.object.getConstants().FANCY.khado &&
                a.categoryDetails.catName !=
                  this.object.getConstants().FANCY.playerPerformace &&
                a.categoryDetails.catName !=
                  this.object.getConstants().FANCY.luckyNumMarket) ||
                (e &&
                  (a.markets.forEach((t, e) => {
                    t.star || ((t.star = 1), (t.index = e));
                  }),
                  t.star && e && (t.star = a.markets[0].star + 1)));
            }),
            this.pinMrketId.includes(t.id))
          ) {
            var a = this.pinMrketId.filter(function (e) {
              return e !== t.id;
            });
            this.pinMrketId = a;
          } else this.pinMrketId.push(t.id);
          e ? this.favouriteMarketPin() : this.favouriteMarketunPin(),
            this.srotefancyfavData();
        }
        srotefancyfavData() {
          let t,
            e = JSON.parse(this.object.getUtilInstance().getStore("favFancy"));
          e &&
            ((this.storefavfancystoreData = e),
            (t = this.storefavfancystoreData.findIndex(
              (t) => t.eventId === this.eventId
            ))),
            (this.storefavfancy[0].fancymarkets = []),
            (this.storefavfancy[0].metermarkets = []),
            (this.storefavfancy[0].khadomarkets = []),
            (this.storefavfancy[0].Bookmaker_Market = []),
            (this.storefavfancy[0].Bookmaker_Disc = []),
            (this.storefavfancy[0].pp = []),
            (this.storefavfancy[0].ld = []),
            this.getFancyMarketDataList.forEach((t) => {
              t.categoryDetails.catName ==
                this.object.getConstants().FANCY.fancy ||
              t.categoryDetails.catName ==
                this.object.getConstants().FANCY.meter ||
              t.categoryDetails.catName ==
                this.object.getConstants().FANCY.khado ||
              t.categoryDetails.catName ==
                this.object.getConstants().FANCY.playerPerformace ||
              t.categoryDetails.catName ==
                this.object.getConstants().FANCY.luckyNumMarket
                ? t.markets.forEach((e) => {
                    if (e.fvrt) {
                      let a = {
                        index: e.index,
                        star: e.star,
                        marketId: e.marketId,
                      };
                      t.categoryDetails.catName ==
                      this.object.getConstants().FANCY.fancy
                        ? this.storefavfancy[0].fancymarkets.push(a)
                        : t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.meter
                        ? this.storefavfancy[0].metermarkets.push(a)
                        : t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.khado
                        ? this.storefavfancy[0].khadomarkets.push(a)
                        : t.categoryDetails.catName ==
                          this.object.getConstants().FANCY.playerPerformace
                        ? this.storefavfancy[0].pp.push(a)
                        : t.categoryDetails.catName ==
                            this.object.getConstants().FANCY.luckyNumMarket &&
                          this.storefavfancy[0].ld.push(a);
                    }
                  })
                : t.markets.forEach((e) => {
                    if (e.minimize) {
                      let a = {
                        marketId: e.marketId,
                      };
                      t.categoryDetails.catName ==
                      this.object.getConstants().FANCY.BookmakerDefault
                        ? this.storefavfancy[0].Bookmaker_Market.push(a)
                        : t.categoryDetails.catName ==
                            this.object.getConstants().FANCY.BookmakerCatDisc &&
                          this.storefavfancy[0].Bookmaker_Disc.push(a);
                    }
                  });
            }),
            (this.storefavfancy[0].eventId = this.eventId),
            t > -1
              ? (this.storefavfancystoreData[t] = this.storefavfancy[0])
              : this.storefavfancystoreData.push(this.storefavfancy[0]),
            null == this.object.getUtilInstance().getStore("minimizeTimeUp") &&
              this.object
                .getUtilInstance()
                .storeState("minimizeTimeUp", new Date().getTime()),
            this.object
              .getUtilInstance()
              .storeState(
                "favFancy",
                JSON.stringify(this.storefavfancystoreData)
              );
        }
        sroteMatchoddfavData() {
          let t,
            e = JSON.parse(
              this.object.getUtilInstance().getStore("favMatchodd")
            );
          e
            ? ((this.storefavMatchodd = e),
              (t = this.storefavMatchodd.findIndex(
                (t) => t.eventId === this.eventId
              )))
            : null ==
                this.object.getUtilInstance().getStore("minimizeTimeUp") &&
              this.object
                .getUtilInstance()
                .storeState("minimizeTimeUp", new Date().getTime());
          let a = {
            eventId: "",
            Match_Odds: [],
          };
          this.playerEventData
            ? this.playerEventData.forEach((t) => {
                t.minimize &&
                  a.Match_Odds.push({
                    marketId: t.marketId,
                  });
              })
            : this.playerEventDetails.forEach((t) => {
                t.minimize &&
                  a.Match_Odds.push({
                    marketId: t.marketId,
                  });
              }),
            (a.eventId = this.eventId),
            t > -1
              ? (this.storefavMatchodd[t] = a)
              : this.storefavMatchodd.push(a),
            this.object
              .getUtilInstance()
              .storeState("favMatchodd", JSON.stringify(this.storefavMatchodd));
        }
        maintainFavFancy() {
          let t,
            e = JSON.parse(this.object.getUtilInstance().getStore("favFancy"));
          e && (t = e.findIndex((t) => t.eventId === this.eventId)),
            t < 0 ||
              !e ||
              (this.getFancyMarketDataList.forEach((a) => {
                a.categoryDetails.catName ==
                  this.object.getConstants().FANCY.fancy ||
                a.categoryDetails.catName ==
                  this.object.getConstants().FANCY.meter ||
                a.categoryDetails.catName ==
                  this.object.getConstants().FANCY.khado ||
                a.categoryDetails.catName ==
                  this.object.getConstants().FANCY.playerPerformace ||
                a.categoryDetails.catName ==
                  this.object.getConstants().FANCY.luckyNumMarket
                  ? e[t][
                      a.categoryDetails.catName ==
                      this.object.getConstants().FANCY.fancy
                        ? "fancymarkets"
                        : a.categoryDetails.catName ==
                          this.object.getConstants().FANCY.meter
                        ? "metermarkets"
                        : a.categoryDetails.catName ==
                          this.object.getConstants().FANCY.playerPerformace
                        ? "pp"
                        : a.categoryDetails.catName ==
                          this.object.getConstants().FANCY.luckyNumMarket
                        ? "ld"
                        : "khadomarkets"
                    ].forEach((t, e) => {
                      a.markets.forEach((e, a) => {
                        e.marketId != t.marketId || e.fvrt
                          ? e.fvrt || ((e.star = 1), (e.index = a))
                          : ((e.index = t.index),
                            (e.star = t.star),
                            (e.fvrt = !0),
                            this.pinMrketId.includes(e.id) ||
                              this.pinMrketId.push(e.id));
                      });
                    })
                  : (a.categoryDetails.catName !=
                      this.object.getConstants().FANCY.BookmakerCatDisc &&
                      a.categoryDetails.catName !=
                        this.object.getConstants().FANCY.BookmakerDefault) ||
                    e[t][
                      a.categoryDetails.catName ==
                      this.object.getConstants().FANCY.BookmakerCatDisc
                        ? "Bookmaker_Disc"
                        : "Bookmaker_Market"
                    ].forEach((t) => {
                      a.markets.forEach((e) => {
                        e.marketId == t.marketId &&
                          ((e.minimize = !0), (e.maximize = !0));
                      });
                    });
              }),
              this.favouriteMarketPin());
        }
        maintainFavMatchodd() {
          let t,
            e = JSON.parse(
              this.object.getUtilInstance().getStore("favMatchodd")
            );
          e && (t = e.findIndex((t) => t.eventId === this.eventId)),
            t < 0 ||
              !e ||
              (this.playerEventData
                ? this.playerEventData.forEach((a) => {
                    e[t].Match_Odds.forEach((t) => {
                      a.marketId == t.marketId &&
                        ((a.minimize = !0), (a.maximize = !0));
                    });
                  })
                : this.playerEventDetails.forEach((a) => {
                    e[t].Match_Odds.forEach((t) => {
                      a.marketId == t.marketId &&
                        ((a.minimize = !0), (a.maximize = !0));
                    });
                  }));
        }
        minimizebook(t, e) {
          let a;
          (document.getElementById(t.marketId + "plus").style.pointerEvents =
            "none"),
            t.minimize ||
              ((a = document.getElementById(t.marketId).offsetHeight),
              (document.getElementById(t.marketId).style.height = a + "px"),
              (document.getElementById(t.marketId).style.transition =
                "height 0.5s"),
              (document.getElementById(t.marketId).style.overflow = "hidden")),
            setTimeout(() => {
              document.getElementById(t.marketId + "plus").style.pointerEvents =
                "auto";
            }, 600),
            setTimeout(() => {
              (t.minimize = !t.minimize),
                "matchodd" == e
                  ? this.sroteMatchoddfavData()
                  : this.srotefancyfavData();
            }, 10),
            setTimeout(
              () => {
                t.maximize = !t.maximize;
              },
              t.maximize ? 0 : 400
            );
        }
        checkminimizeFavSession() {
          let t = new Date().getTime(),
            e = this.object.getUtilInstance().getStore("minimizeTimeUp");
          t - Number(e) > 864e5 &&
            setTimeout(() => {
              this.removestoreminimize();
            }, 2e3);
        }
        removestoreminimize() {
          let t = [],
            e = [],
            a = JSON.parse(
              this.object.getUtilInstance().getStore("favMatchodd")
            ),
            s = JSON.parse(this.object.getUtilInstance().getStore("favFancy"));
          a &&
            (a.forEach((e, a) => {
              this.object.dashboardData.children.forEach((a, s) => {
                a.children.forEach((a) => {
                  e.eventId == a.eventId && t.push(e);
                });
              });
            }),
            t.length > 0
              ? (this.object
                  .getUtilInstance()
                  .storeState("favMatchodd", JSON.stringify(t)),
                this.object
                  .getUtilInstance()
                  .storeState("minimizeTimeUp", new Date().getTime()))
              : this.object.getUtilInstance().removeState("favMatchodd")),
            s &&
              (s.forEach((t, a) => {
                this.object.dashboardData.children.forEach((a, s) => {
                  a.children.forEach((a) => {
                    t.eventId == a.eventId && e.push(t);
                  });
                });
              }),
              e.length > 0
                ? (this.object
                    .getUtilInstance()
                    .storeState("favFancy", JSON.stringify(e)),
                  this.object
                    .getUtilInstance()
                    .storeState("minimizeTimeUp", new Date().getTime()))
                : this.object.getUtilInstance().removeState("favFancy")),
            t.length < 1 &&
              e.length < 1 &&
              this.object.getUtilInstance().removeState("minimizeTimeUp");
        }
        handleWicketFancy(t) {
          this.updateMenuList.nwicketSub = t;
        }
        checkpinnedItemSession() {
          let t = new Date().getTime(),
            e = this.object.getUtilInstance().getStore("pinnedTimeUp");
          t - Number(e) > 864e5 &&
            setTimeout(() => {
              this.removeSettledpinnedItem();
            }, 2e3);
        }
        removeSettledpinnedItem() {
          let t = [],
            e = JSON.parse(
              this.object
                .getUtilInstance()
                .getStore(this.object.constant.STORAGE.pinned)
            );
          e &&
            (e.forEach((e, a) => {
              this.object.dashboardData.children.forEach((a, s) => {
                a.children.forEach((a) => {
                  e == a.marketId && t.push(e);
                });
              });
            }),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.constant.STORAGE.pinned,
                JSON.stringify(t)
              ),
            this.object
              .getUtilInstance()
              .storeState("pinnedTimeUp", new Date().getTime()),
            this.getMobilePinnedItems(),
            this.getPinnedItems()),
            t.length < 1 &&
              this.object.getUtilInstance().removeState("pinnedTimeUp");
        }
        editExpo() {
          (this.object.getLoginInstance().state.isTrManager ||
            this.object.getLoginInstance().state.isTrCM) &&
            (this.runnermodel = !0);
        }
        clearNetExp() {
          (this.riskNetrunnerExposer.runr1 = "0"),
            (this.riskNetrunnerExposer.runr2 = "0"),
            (this.riskNetrunnerExposer.runr3 = "0"),
            this.handleNetExposer();
        }
        handleNetExposer() {
          let t,
            e = {
              eventId: this.eventId,
              runner: {},
            },
            a = [];
          this.object.getUtilInstance().getStore("riskNetExposer") &&
            (a = JSON.parse(
              this.object.getUtilInstance().getStore("riskNetExposer")
            )),
            a && (t = a.findIndex((t) => t.eventId === this.eventId)),
            (e.runner = this.riskNetrunnerExposer),
            (this.riskNetUIExposer.runr1 = this.riskNetrunnerExposer.runr1),
            (this.riskNetUIExposer.runr2 = this.riskNetrunnerExposer.runr2),
            (this.riskNetUIExposer.runr3 = this.riskNetrunnerExposer.runr3),
            t > -1 ? (a[t] = e) : a.push(e),
            this.object
              .getUtilInstance()
              .storeState("riskNetExposer", JSON.stringify(a)),
            (this.runnermodel = !1);
        }
        maintainRiskNetExposer() {
          if (!this.object.isAdminLogin) return;
          let t = JSON.parse(
            this.object.getUtilInstance().getStore("riskNetExposer")
          );
          t &&
            ((this.riskNetrunnerExposer.runr1 = t[0].runner.runr1),
            (this.riskNetrunnerExposer.runr2 = t[0].runner.runr2),
            (this.riskNetrunnerExposer.runr3 = t[0].runner.runr3),
            (this.riskNetUIExposer = t[0].runner));
        }
        keyPressNumbersDecimal(t) {
          if (t.target.value.length > 10) return !1;
          var e = t.which ? t.which : t.keyCode;
          return (
            !(
              (45 != e && 46 != e && e > 31 && (e < 48 || e > 57)) ||
              (48 == e && t.target.value.length < 1)
            ) || (t.preventDefault(), !1)
          );
        }
        click(t) {
          (this.runnermodel = !1),
            this.expandedgt && this.showCheckboxesgameType();
        }
        scoreCardVisiblity() {
          let t = this.object.palyerSelfInfo;
          if (t) {
            if (
              t.currency == this.object.getConstants().CURRENCY.CI &&
              t.balance < this.object.requiredBalforCI
            ) {
              let t = this.object.getRouterInstance().url.split("/")[3],
                e = JSON.parse(
                  this.object.getUtilInstance().getStore("recents")
                ),
                a = e.findIndex((e) => e.eventId == t);
              if (a < 0) return;
              this.object.isEventHaveBetForStream =
                !!e[a].hasOwnProperty("title");
            }
          } else
            setTimeout(() => {
              this.scoreCardVisiblity();
            }, 5e3);
        }
        updateOddsFeed(t) {
          (this.loading = !0),
            this.service
              .adminget(
                this.object.getURLInstance().updateOddsFeed,
                "eventId=" + t,
                this.headers()
              )
              .subscribe(
                (t) => {
                  this.loading = !1;
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        updateEventTime(t) {
          (this.loading = !0),
            this.service
              .adminget(
                this.object.getURLInstance().updateEvntTime,
                "eventId=" + t,
                this.headers()
              )
              .subscribe(
                (t) => {
                  this.loading = !1;
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        showCheckboxesgameType() {
          var t = document.getElementById("checkBoxesmarket");
          this.expandedgt
            ? ((t.style.display = "none"), (this.expandedgt = !1))
            : ((t.style.display = "block"), (this.expandedgt = !0));
        }
        togglebetslip() {
          (this.toggleSlip =
            document.getElementsByClassName("bet-slip-container")[0]),
            this.toggleSlip.classList.value.includes("rightbetclose") &&
              (this.toggleSlip.classList.remove("rightbetclose"),
              this.toggleSlip.classList.add("rightbetopen"));
        }
        cashoutBetslipWeb(t, e, a) {
          if (null == t.suspended && null == t.status);
          else if (1 == t.suspended || "OPEN" != t.status) return;
          if ("MATCH_ODDS" == a) {
            if (0 == t.runners[0].btb.length || 0 == t.runners[1].btb.length)
              return;
            let e,
              a,
              s,
              i =
                t.runners[0].btb[0].pr < t.runners[1].btb[0].pr
                  ? t.runners[0]
                  : t.runners[1],
              n = parseFloat(i.playerExposure),
              r =
                t.runners[0].btb[0].pr < t.runners[1].btb[0].pr
                  ? t.runners[1].playerExposure
                  : t.runners[0].playerExposure;
            if (
              ((r = parseFloat(r)),
              n < 0 && r < 0
                ? ((a =
                    0 == (e = (n = Math.abs(n)) < (r = Math.abs(r)) ? 1 : 0)
                      ? i.btb[0].pr
                      : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a))
                : n > 0 && r > 0
                ? ((a = 0 == (e = n < r ? 0 : 1) ? i.btb[0].pr : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a))
                : ((a = 0 == (e = n < 0 ? 0 : 1) ? i.btb[0].pr : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a)),
              a <= 0 || isNaN(a))
            )
              return;
            this.togglebetslip();
            let o = {
              match: i,
              selectionId: i.selectionId,
              marketType: t.name,
              odds: a,
              exchangeStake: Math.round(Math.abs(s)),
              id: 0,
              eventType: t.eventId,
              eventId: t.eventId,
              marketId: t.marketId,
              sideType: e,
              isFancy: !1,
              oddsType: null,
              runnersNo: null,
              runnerName: i.runnerName,
              fancyMarketCategory: "MATCH_ODDS",
              minStake: t.minStake,
              maxStake: t.maxStake,
              maxMktStake: t.maxMktStake,
              action: this.object.getConstants().ACTIONS.ADD,
            };
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.BETSLIP,
                o
              );
            }, 100);
          } else if ("Bookmaker_Market" == a) {
            let a,
              s,
              i,
              n =
                t.runners[0].backOdds < t.runners[1].backOdds
                  ? t.runners[0]
                  : t.runners[1],
              r = parseFloat(n.playerExposureValue),
              o =
                t.runners[0].backOdds < t.runners[1].backOdds
                  ? t.runners[1].playerExposureValue
                  : t.runners[0].playerExposureValue;
            if (
              ((o = parseFloat(o)),
              r < 0 && o < 0
                ? ((s =
                    0 == (a = (r = Math.abs(r)) < (o = Math.abs(o)) ? 1 : 0)
                      ? n.backOdds
                      : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100)))
                : r > 0 && o > 0
                ? ((s = 0 == (a = r < o ? 0 : 1) ? n.backOdds : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100)))
                : ((s = 0 == (a = r < 0 ? 0 : 1) ? n.backOdds : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100))),
              s <= 0 || isNaN(s))
            )
              return;
            this.togglebetslip();
            let h = {
              match: n,
              eventId: t.eventId,
              runs:
                t.fancyCategory == this.object.getConstants().FANCY.Khado_Market
                  ? 0
                  : "",
              sideType: a,
              marketId: t.id,
              exchangeStake: Math.round(Math.abs(i)),
              marketType: n.runnerName,
              odds: s,
              eventType: t.eventType,
              selectionId: n.selectionId,
              fancyMarketCategory: t.fancyCategory,
              isFancy: t.fancy,
              oddType: e.oddType,
              runnersNo: e.runnersNo,
              minStake: t.minStake,
              maxStake: t.maxStake,
              marketDisc: t.marketDisc,
              backRuns: n.backRuns,
              action: this.object.getConstants().ACTIONS.ADD,
              fancyPlayerBook: [],
            };
            setTimeout(() => {
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.FANCYBETSLIP,
                h
              );
            }, 100);
          }
        }
        cashoutBetslipMob(t, e, a) {
          if (null == t.suspended && null == t.status);
          else if (1 == t.suspended || "OPEN" != t.status) return;
          if ("MATCH_ODDS" == a) {
            if (0 == t.runners[0].btb.length || 0 == t.runners[1].btb.length)
              return;
            let e,
              a,
              s,
              i =
                t.runners[0].btb[0].pr < t.runners[1].btb[0].pr
                  ? t.runners[0]
                  : t.runners[1],
              n = parseFloat(i.playerExposure),
              r =
                t.runners[0].btb[0].pr < t.runners[1].btb[0].pr
                  ? t.runners[1].playerExposure
                  : t.runners[0].playerExposure;
            (r = parseFloat(r)),
              n < 0 && r < 0
                ? ((a =
                    0 == (e = (n = Math.abs(n)) < (r = Math.abs(r)) ? 1 : 0)
                      ? i.btb[0].pr
                      : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a))
                : n > 0 && r > 0
                ? ((a = 0 == (e = n < r ? 0 : 1) ? i.btb[0].pr : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a))
                : ((a = 0 == (e = n < 0 ? 0 : 1) ? i.btb[0].pr : i.btl[0].pr),
                  (a = parseFloat(a)),
                  (s = Math.abs(n - r) / a));
            let o = {
              match: i,
              selectionId: i.selectionId,
              marketType: t.name,
              odds: a,
              exchangeStake: Math.round(Math.abs(s)),
              id: 0,
              eventType: t.eventId,
              eventId: t.eventId,
              marketId: t.marketId,
              sideType: e,
              isFancy: !1,
              oddsType: null,
              runnersNo: null,
              runnerName: i.runnerName,
              fancyMarketCategory: "MATCH_ODDS",
              minStake: t.minStake,
              maxStake: t.maxStake,
              maxMktStake: t.maxMktStake,
              action: this.object.getConstants().ACTIONS.ADD,
            };
            if (a <= 0 || isNaN(a)) return;
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.MOBILEBETSLIP,
              o
            ),
              (this.clickEventHeight = event.screenY),
              setTimeout(() => {
                this.scroll.classList.add("margbottomnevnt");
                var t = this.object.getDOMInstance().byId("booterpopId");
                window.screen.height / 2 + 50 < this.clickEventHeight &&
                  window.scrollBy({
                    top: t.offsetHeight + 10,
                    left: 0,
                    behavior: "smooth",
                  });
              }, 200);
          } else if ("Bookmaker_Market" == a) {
            let a,
              s,
              i,
              n =
                t.runners[0].backOdds < t.runners[1].backOdds
                  ? t.runners[0]
                  : t.runners[1],
              r = parseFloat(n.playerExposureValue),
              o =
                t.runners[0].backOdds < t.runners[1].backOdds
                  ? t.runners[1].playerExposureValue
                  : t.runners[0].playerExposureValue;
            if (
              ((o = parseFloat(o)),
              r < 0 && o < 0
                ? ((s =
                    0 == (a = (r = Math.abs(r)) < (o = Math.abs(o)) ? 1 : 0)
                      ? n.backOdds
                      : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100)))
                : r > 0 && o > 0
                ? ((s = 0 == (a = r < o ? 0 : 1) ? n.backOdds : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100)))
                : ((s = 0 == (a = r < 0 ? 0 : 1) ? n.backOdds : n.layOdds),
                  (s = parseFloat(s)),
                  (i = Math.abs(r - o) / (1 + s / 100))),
              s <= 0 || isNaN(s))
            )
              return;
            let h = {
              match: n,
              eventId: t.eventId,
              runs:
                t.fancyCategory == this.object.getConstants().FANCY.Khado_Market
                  ? 0
                  : "",
              sideType: a,
              marketId: t.id,
              exchangeStake: Math.round(Math.abs(i)),
              marketType: n.runnerName ? n.runnerName : t.marketType,
              odds: s,
              eventType: t.eventType,
              selectionId: n.selectionId,
              fancyMarketCategory: t.fancyCategory,
              isFancy: t.fancy,
              oddType: e.oddType,
              runnersNo: e.runnersNo,
              action: this.object.getConstants().ACTIONS.ADD,
              fancyPlayerBook: [],
              minStake: t.minStake,
              maxStake: t.maxStake,
              marketDisc: t.marketDisc,
              backRuns: n.backRuns,
              showMinMax: !0,
            };
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.MOBILEFANCYBETSLIP,
              h
            ),
              (this.clickEventHeight = event.screenY),
              this.object.getDOMInstance().byId("booterpopId"),
              window.screen.height < 645
                ? setTimeout(() => {
                    this.scroll.classList.add("margbottomnevnt"),
                      window.screen.height / 2 + 60 < this.clickEventHeight &&
                        window.scrollBy({
                          top: 260,
                          left: 0,
                          behavior: "smooth",
                        });
                  }, 200)
                : setTimeout(() => {
                    this.scroll.classList.add("margbottomnevnt"),
                      window.screen.height / 2 + 110 < this.clickEventHeight &&
                        window.scrollBy({
                          top: 240,
                          left: 0,
                          behavior: "smooth",
                        });
                  }, 200);
          }
        }
        selectEventType(t, e, a) {
          let s,
            i = [];
          "All" == t.eventTypeName
            ? this.marketListmultiselect.map((t) => {
                t.selected = a;
              })
            : ((t.selected = a),
              this.marketListmultiselect.forEach((t, e) => {
                "All" == t.eventTypeName && (t.selected = !1),
                  t.selected && i.push(t.eventTypeName);
              }),
              this.marketListmultiselect[1].selected &&
                this.marketListmultiselect[2].selected &&
                this.marketListmultiselect[3].selected &&
                (this.marketListmultiselect[0].selected = !0),
              (s = i.join())),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.SaveMarketExpFilter,
                JSON.stringify(this.marketListmultiselect)
              ),
            this.calculateExpfilter.emit();
        }
        oddFeedAPI() {
          (this.loading = !0),
            this.service
              .adminget(
                this.object.getURLInstance().getOddFeedSource,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  (this.loading = !1),
                    (this.oddFeedData = t.data.source),
                    (this.tempOddFeed = this.oddFeedData);
                },
                (t) => {
                  (this.loading = !1), this.setError(t);
                }
              );
        }
        openSaveModal() {
          this.tempOddFeed != this.oddFeedData &&
            this.tempOddFeed &&
            (this.object
              .getDOMInstance()
              .showModal(this.object.getDOMInstance().modal.confirmbox),
            (this.feedValue = this.oddFeedData + " >> " + this.tempOddFeed));
        }
        oddSourceChange() {
          this.object
            .getDOMInstance()
            .hideModal(this.object.getDOMInstance().modal.confirmbox),
            (this.loading = !0);
          let t = {
            source: this.tempOddFeed,
          };
          this.service
            .adminpost(
              this.object.getURLInstance().changeOddFeedSource,
              t,
              this.headers()
            )
            .toPromise()
            .then(
              (t) => {
                (this.loading = !1), (this.oddFeedData = t.data.source);
              },
              (t) => {
                (this.loading = !1), this.setError(t);
              }
            );
        }
        oddFeedFromDropdown(t) {
          this.tempOddFeed = t.target.value;
        }
        confirm() {
          this.object
            .getDOMInstance()
            .hideModal(this.object.getDOMInstance().modal.confirmbox),
            this.oddSourceChange();
        }
        cancle() {
          this.tempOddFeed = this.oddFeedData;
        }
        openBetslipModel() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.mobileplayerBetView);
        }
        virtualGamesInplay() {
          "D1" == this.object.themeChange.uxDesign &&
            this.object.findIndexAndRemoveObject(
              this.virtualGames.children,
              "eventName",
              "Player Contest"
            ),
            !this.object.themeChange.bankingView &&
              (this.object.sportsBookSuper.some(
                (t) => t == this.object.getLoginInstance().state.user_TntId
              ) ||
                this.object.findIndexAndRemoveObject(
                  this.virtualGames.children,
                  "eventName",
                  "Sports Book"
                ),
              "D1" == this.object.themeChange.uxDesign &&
                this.object.sportsBookSuper.some(
                  (t) => t == this.object.getLoginInstance().state.user_TntId
                )) &&
              -1 ==
                this.virtualGames.children.findIndex(
                  (t) => "Sports Book" === t.eventName
                ) &&
              this.virtualGames.children.push(this.sportsbookobj),
            this.object.themeChange.playerContest ||
              this.object.findIndexAndRemoveObject(
                this.virtualGames.children,
                "eventName",
                "Player Contest"
              ),
            ("D2" != this.object.themeChange.uxDesign &&
              "D1" != this.object.themeChange.uxDesign) ||
              ("20210414" != this.object.themeChange.whitelableId &&
                "20220816" != this.object.themeChange.whitelableId &&
                "20221011" != this.object.themeChange.whitelableId &&
                "20230120" != this.object.themeChange.whitelableId &&
                "20230688" != this.object.themeChange.whitelableId &&
                "20230702" != this.object.themeChange.whitelableId &&
                "20230704" != this.object.themeChange.whitelableId &&
                "20230709" != this.object.themeChange.whitelableId &&
                "20230710" != this.object.themeChange.whitelableId &&
                "20230713" != this.object.themeChange.whitelableId &&
                this.object.dashboardData.children.splice(
                  1,
                  0,
                  this.virtualGames
                ));
        }
        bonusDetail() {
          this.object.getLoginInstance().getIsLogin() &&
            "D1" != this.object.themeChange.uxDesign &&
            this.object.getLoginInstance().state.isPlayer &&
            this.service
              .adminget(
                this.object.getURLInstance().getPlayerBonusDetails,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                t &&
                  (this.object.playerBonusDetails = t.data.playerBonusDetails);
              })
              .catch((t) => {
                this.setError(t);
              });
        }
      }
    },
  },
]);
