(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    FVmP: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8Y7J");
      class s {}
      var l = n("pMnS"),
        a = n("7A4S"),
        o = n("4TLs"),
        r = n("alQF"),
        c = n("iInd");
      class u {
        constructor() {}
        ngOnInit() {
          window.scroll(0, 0);
        }
      }
      var h = i.ob({
        encapsulation: 0,
        styles: [[""]],
        data: {},
      });
      function g(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-caino-header",
              [],
              null,
              null,
              null,
              a.b,
              a.a
            )),
            i.pb(1, 245760, null, 0, o.a, [r.a], null, null),
            (t()(),
            i.qb(
              2,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            i.pb(
              3,
              212992,
              null,
              0,
              c.u,
              [c.c, i.N, i.j, [8, null], i.h],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0), t(e, 3, 0);
          },
          null
        );
      }
      function b(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-casino-game-dashboard",
              [],
              null,
              null,
              null,
              g,
              h
            )),
            i.pb(1, 114688, null, 0, u, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var d = i.mb("app-casino-game-dashboard", u, b, {}, {}, []),
        p = n("SVse"),
        m = n("igOe"),
        v = n("t544"),
        C = n("Ix5W"),
        I = n("IttH"),
        y = (n("kyFz"), n("PgmE")),
        f = n("TStJ");
      class j extends y.a {
        constructor(t, e, n, i, s, l, a) {
          super(t, e, n, i, s, l),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.senitizer = l),
            (this.routeParam = a),
            (this.transectionCoin = "0"),
            (this.handleVisibleState = () => {
              "visible" == document.visibilityState &&
                window.name != this.object.getUtilInstance().getStore("lc") &&
                (this.object.getDOMInstance().showModal("multipleTab"),
                setTimeout(() => {
                  this.object.getDOMInstance().hideModal("multipleTab"),
                    this.router.navigate(["/"]);
                }, 5e3));
            });
        }
        ngOnInit() {
          (this.object.activeWebLink = window.localStorage.getItem("path")),
            this.getRouteParams(),
            window.name ||
              (window.name = Math.floor(1e10 * Math.random()).toString()),
            this.object.getUtilInstance().storeState("lc", window.name),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            );
        }
        getRouteParams() {
          this.routeParam.params.subscribe((t) => {
            let e = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.LiveCasinoGameType);
            (this.gameUrl = t.uuId),
              this.object.onChangeEvents(),
              e == this.object.getConstants().PNL.SUPERNOWA
                ? this.getAllCasinoEventList()
                : this.getLiveCasinoEventList(),
              (this.unsubscribeEventUpdate = this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
                .subscribe((t) => {
                  t.booleanKeys[0] &&
                    t.booleanKeys[0].casinoUpdated &&
                    t.booleanKeys[0].eventId == this.gameUrl &&
                    (e == this.object.getConstants().PNL.SUPERNOWA
                      ? this.getAllCasinoEventList()
                      : this.getLiveCasinoEventList(),
                    setTimeout(() => {
                      this.checkEventStatus();
                    }, 1e3));
                })),
              this.launchGame(this.gameUrl),
              this.setRecent();
          });
        }
        launchGame(t) {
          let e = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.LiveCasinoGameType),
            n = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token);
          (this.transectionCoin = this.object
            .getUtilInstance()
            .getStore(this.object.getConstants().STORAGE.COIN)),
            (this.jiliCoin = this.transectionCoin ? this.transectionCoin : "0"),
            this.object.palyerSelfInfo
              ? this.getJiliGameUrl(this.gameUrl, e)
              : setTimeout(() => {
                  null == n
                    ? this.getJiliGameUrl(this.gameUrl, e)
                    : this.launchGame(t);
                }, 2e3),
            (this.object.isJiliGameRunning = !0);
        }
        setRecent() {
          setTimeout(() => {
            let t = [];
            (t = [
              ...this.playerLiveCasino,
              ...this.playerSlotBingo,
              ...this.playerIceCasino,
            ].filter((t) => t.eventId == this.gameUrl)).length &&
              this.object.setRecents(t[0].gameType, {
                eventName: t[0].gameName,
                eventId: t[0].eventId,
                eventTypeName: t[0].provider,
                thumbImage: t[0].imgUrl,
                key: t[0].key,
                currConv: t[0].currConv,
              });
          }, 3e3);
        }
        hidemodal() {
          this.object.getDOMInstance().hideModal("curencyInfo"),
            this.getGameUrl(this.gameUrl);
        }
        hideNavigatelivecasino() {
          this.object.getDOMInstance().hideModal("lowbalance"),
            this.router.navigate(["/casino-games/live-casino"]);
        }
        ngOnDestroy() {
          document.removeEventListener(
            "visibilitychange",
            this.handleVisibleState,
            !0
          ),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.unsubscribeEventUpdate &&
              this.unsubscribeEventUpdate.unsubscribe(),
            window.name == this.object.getUtilInstance().getStore("lc") &&
              this.object.getUtilInstance().removeState("lc"),
            this.object.getUtilInstance().getStore("liveCasinoType") &&
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
              ),
            this.object
              .getUtilInstance()
              .removeState(
                this.object.getConstants().STORAGE.LiveCasinoGameType
              ),
            this.object.getUtilInstance().removeState("jilicoin"),
            this.object
              .getUtilInstance()
              .removeState(this.object.getConstants().STORAGE.ACCESSKEY),
            this.object
              .getUtilInstance()
              .removeState(this.object.getConstants().STORAGE.CURRENCYCONV),
            (this.object.isJiliGameRunning = !1);
        }
        ngAfterViewInit() {}
      }
      var L = n("GVaW"),
        E = n("cWJh"),
        A = n("cUpR"),
        O = i.ob({
          encapsulation: 0,
          styles: [
            [
              ".ifream[_ngcontent-%COMP%]{height:calc(95vh - 100px);width:100%;border:none}.jilisize[_ngcontent-%COMP%]{height:calc(90vh - 100px)}",
            ],
          ],
          data: {},
        });
      function S(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "iframe",
              [["class", "ifream"]],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
            i.Hb(512, null, p.A, p.B, [i.q, i.r, i.k, i.B]),
            i.pb(
              2,
              278528,
              null,
              0,
              p.l,
              [p.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, "ifream", e.component.jiliGame ? "jilisize" : "");
          },
          function (t, e) {
            t(e, 0, 0, e.component.gameUrlLink);
          }
        );
      }
      function T(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "wearecasin"],
                [
                  "style",
                  "margin-top:145px; padding:20px 0; background-color:#000",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, S)),
            i.pb(
              2,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.gameUrlLink);
          },
          null
        );
      }
      function M(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "iframe",
              [["class", "ifream"]],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
            i.Hb(512, null, p.A, p.B, [i.q, i.r, i.k, i.B]),
            i.pb(
              2,
              278528,
              null,
              0,
              p.l,
              [p.A],
              {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"],
              },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, "ifream", e.component.jiliGame ? "jilisize" : "");
          },
          function (t, e) {
            t(e, 0, 0, e.component.gameUrlLink);
          }
        );
      }
      function x(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "wearecasin"],
                [
                  "style",
                  "margin-top:64px; padding:20px 0; background-color:#000",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, M)),
            i.pb(
              2,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.gameUrlLink);
          },
          null
        );
      }
      function w(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-loader",
              [],
              null,
              null,
              null,
              m.b,
              m.a
            )),
            i.pb(1, 114688, null, 0, v.a, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function P(t) {
        return i.Mb(
          0,
          [
            (t()(), i.fb(16777216, null, null, 1, null, T)),
            i.pb(
              1,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, x)),
            i.pb(
              3,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              1,
              "app-multiple-window",
              [],
              null,
              null,
              null,
              C.b,
              C.a
            )),
            i.pb(5, 114688, null, 0, I.a, [], null, null),
            (t()(), i.fb(16777216, null, null, 1, null, w)),
            i.pb(
              7,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "D1" == n.object.themeChange.uxDesign),
              t(e, 3, 0, "D2" == n.object.themeChange.uxDesign),
              t(e, 5, 0),
              t(e, 7, 0, n.loading);
          },
          null
        );
      }
      function N(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-we-are-casino",
              [],
              null,
              null,
              null,
              P,
              O
            )),
            i.pb(
              1,
              4440064,
              null,
              0,
              j,
              [L.a, r.a, E.a, f.a, c.p, A.b, c.a],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var U = i.mb("app-we-are-casino", j, N, {}, {}, []),
        R = n("Yxr/"),
        k = n("5YLO"),
        _ = n("7V71"),
        D = n("L7o+"),
        G = n("tMtU"),
        q = n("CFSd"),
        B = n("w/2+"),
        F = n("3V0X"),
        Y = n("NGzU"),
        V = n("owU6"),
        J = n("01EG");
      class z extends J.a {
        constructor(t, e) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.playerLiveCasino = []),
            (this.playerSlotBingo = []),
            (this.playerIceCasino = []),
            (this.supernowaCasino = []),
            (this.royalgaming = []),
            (this.studio1 = []),
            (this.studio2 = []),
            (this.superNova = []),
            (this.studio1Visible = !0),
            (this.studio2Visible = !0),
            (this.supernovaVisible = !0),
            (this.showTabs = 0),
            (this.pokerCasino = []),
            (this.mySubscriptionEvent = []),
            (this.keysArray = []),
            (this.resultArray = []),
            (this.runnerIdList = []),
            (this.timerValue = 0),
            (this.loading = !1),
            (this.to = " \u279f "),
            (this.gameTypeTabs = 1),
            (this.activeGameType = "All"),
            (this.currencyList = []),
            (this.originalList = []),
            (this.updatedcurr = []),
            (this.tempArr = []),
            (this.slotsAndBingo = []),
            (this.commonGamneList = []),
            (this.selectedCurency = {
              eventId: 0,
              currency: null,
              enableCurrency: null,
            }),
            (this.IntCasinoList = []),
            (this.liveCasinoList = []),
            (this.IntCasinoListLive = []),
            (this.virtualCasinoEventsList = []),
            (this.slotsAndBingoLive = []),
            (this.updateCasinoEvent = []),
            (this.updateLiveCasinoEvent = []),
            (this.iceCasinoList = []),
            (this.showcrencyEnableDisable = []),
            (this.currencyCI = !0),
            (this.currencyCH = !0),
            (this.currencyCU = !0),
            (this.visibleCI = !0),
            (this.visibleCU = !0),
            (this.visibleCH = !0),
            (this.visibleCILive = !0),
            (this.visibleCULive = !0),
            (this.visibleCHLive = !0),
            (this.activeStudio = "All"),
            (this.coinArray = [20, 100, 500, 1e3, 1500, 2e3]),
            (this.totalstack = {
              t1: 0,
              t2: 0,
              t3: 0,
            }),
            (this.allrunner = {
              r1: "",
              r2: "",
              r3: "",
            }),
            (this.coinLastIndex = {
              ind1: null,
              ind2: null,
              ind3: null,
            }),
            (this.stackValue = 0),
            (this.oldstake = 0),
            (this.jiliCoin = "0"),
            (this.tansfercoinAmount = 0),
            (this.providersType = "All"),
            (this.TypeFilter = "All"),
            (this.activeProvider = "All"),
            (this.activegameType = "All"),
            (this.filterSeq = []),
            (this.allTabPermission = !0),
            (this.demoUserList = []),
            (this.updateEvent = {
              eventId: 0,
              status: null,
              currency: null,
              enableCurrency: null,
            }),
            (this.gameTypeByRoles = {
              SPORTS: !1,
              ACE_CASINO: !1,
              INTERNATIONAL_CASINO: !1,
              VIRTUAL_SPORTS: !1,
              STOLT_AND_BINGO: !1,
              SPECIAL_MARKET: !1,
            }),
            (this.currencyObject = [
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CI",
                status: !1,
              },
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CH",
                status: !1,
              },
              {
                balance: 0,
                refPnL: 0,
                creditRef: 0,
                rate: 0,
                currency: "CU",
                status: !1,
              },
            ]),
            (this.columnList = [
              {
                prop: "sno",
                name: "S.No",
                size: 100,
                selected: !0,
              },
              {
                prop: "provider",
                name:
                  2 == this.gameTypeTabs
                    ? "Internationl Casino"
                    : 3 == this.gameTypeTabs
                    ? "Slots & Bingo"
                    : "Ace Casino",
                size: 100,
                selected: !0,
              },
              {
                prop: "studio",
                name: "Studio",
                size: 100,
                selected: !0,
              },
              {
                prop: "CI",
                name: "CI",
                size: 100,
                selected: !0,
              },
              {
                prop: "CU",
                name: "CU",
                size: 100,
                selected: !0,
              },
              {
                prop: "CH",
                name: "CH",
                size: 100,
                selected: !0,
              },
            ]),
            (this.skltonLoader = !1),
            (this.betplaceanimation = !1),
            (this.gameType = "casino");
        }
      }
      class H extends z {
        constructor(t, e, n, i, s, l) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.senitizer = l),
            this.init();
        }
        init() {
          this.casinoPlayerBook(),
            (this.timer = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.second)),
            (this.token = this.object.getUtilInstance().getStore("token")),
            (this.demoUserList = Object.values(
              this.object.getConstants().DEMOUSER
            ));
        }
        showWinnerDetail(t) {
          let e = [];
          (this.winnerB = null),
            (this.winnerA = null),
            (this.tie = null),
            (this.winnerList = null),
            this.marketList.forEach((n) => {
              (this.runnerIdList = []),
                n.resultsArr.forEach((t) => {
                  Object.keys(t.runners).forEach((t) => {
                    this.runnerIdList.push(t);
                  });
                }),
                (this.runnerIdList = this.runnerIdList.filter(
                  (t, e) => this.runnerIdList.indexOf(t) == e
                )),
                n.roundId == t.roundId && e.push(n);
            }),
            (this.winnerList = e[0]),
            "PLAYER A" == t.winner || "DRAGON" == t.winner
              ? ((this.winnerA = "WINNER"),
                (this.winnerB = null),
                (this.tie = null))
              : "TIE" == t.winner
              ? ((this.tie = "TIE"),
                (this.winnerA = null),
                (this.winnerB = null))
              : ((this.winnerB = "WINNER"),
                (this.winnerA = null),
                (this.tie = null));
          let n = {
            winnerList: this.winnerList,
            winnerA: this.winnerA,
            winnerB: this.winnerB,
            tie: this.tie,
          };
          this.broadCast.broadcast(
            this.object.getConstants().BROADCASTKEY.RecentResult,
            n
          ),
            setTimeout(() => {
              this.object
                .getDOMInstance()
                .showModal(this.object.getDOMInstance().modal.winnerDetail);
            }, 1e3);
        }
        getCasinoResultList() {
          this.mySubscriptionResult = this.fireService
            .getCasinoResultList(this.eventId)
            .subscribe((t) => {
              let e = t;
              (this.marketList = t),
                (this.resultArray = []),
                e.forEach((t) => {
                  t.resultsArr.forEach((e) => {
                    let n = Object.keys(e.runners);
                    (e.marketName !=
                      this.object.getConstants().CASINOGAME.winner &&
                      e.marketName !=
                        this.object.getConstants().CASINOGAME.RACEWINNER &&
                      e.marketName !=
                        this.object.getConstants().CASINOGAME.LIVELOTTERY) ||
                      n.forEach((n) => {
                        e.runners[n] ==
                          this.object.getConstants().CASINOGAME.winner &&
                          this.resultArray.splice(0, 0, {
                            winner: e.runnersName[n],
                            roundId: t.roundId,
                          }),
                          e.runners[n] ==
                            this.object.getConstants().CASINOGAME.TIE &&
                            this.resultArray.splice(0, 0, {
                              winner: e.runners[n],
                              roundId: t.roundId,
                            }),
                          t.eventName ==
                            this.object.getConstants().CASINO.DT1 &&
                            e.marketName ==
                              this.object.getConstants().CASINOGAME.winner &&
                            "LOSER" == e.runners[3884437] &&
                            "LOSER" == e.runners[38372466] &&
                            (Object.assign(e.runners, {
                              3954374: "TIE",
                            }),
                            Object.assign(e.runnersName, {
                              3954374: "TIE",
                            }),
                            this.resultArray.splice(0, 0, {
                              winner: e.runners[3954374],
                              roundId: t.roundId,
                            }));
                      });
                  });
                }),
                (this.marketList = e),
                (this.resultList = this.resultArray.filter(
                  (t, e, n) => n.findIndex((e) => e.roundId === t.roundId) === e
                )),
                (this.blinkResult = this.resultList[0]),
                (this.totalstack.t1 = 0),
                (this.totalstack.t2 = 0),
                (this.totalstack.t3 = 0),
                (this.coinLastIndex.ind1 = null),
                (this.coinLastIndex.ind2 = null),
                (this.coinLastIndex.ind3 = null),
                setTimeout(() => {
                  this.blinkResult = "";
                }, 2500);
              let n = this.object.getUtilInstance().getStore("resultroundID");
              this.resultList[0].roundId != n &&
                (this.object
                  .getUtilInstance()
                  .storeState("resultroundID", this.resultList[0].roundId),
                this.object.betlistId.matchId.length > 0 &&
                  this.broadCast.broadcast(
                    this.object.getConstants().BETLIST.UPDATEBETLIST,
                    {
                      value: !0,
                    }
                  ),
                this.broadCast.broadcast(
                  this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
                  {
                    value: !0,
                  }
                ));
            });
        }
        getCasinoDataByEventId(t) {
          this.mySubscriptionEvent.push(
            this.fireService.getCasinoDataByEvent(t).subscribe((t) => {
              if (
                ((this.casinoEventListById = t),
                this.firebaseEventForUpdate(),
                this.casinoEventListById.marketArr.forEach((t) => {
                  null != t.runners.length &&
                    t.runners.forEach((e) => {
                      this.casinoEventDataList.forEach((n) => {
                        n.runners.forEach((i) => {
                          Number(e.selectionId) ==
                            Number(i.casinoSelectionId) &&
                            t.marketId == n.marketId &&
                            ((i.backOdds = e.price.back[0].price),
                            (i.backRemainingStakes = e.price.back[0].size),
                            (i.status = e.status),
                            e.price.hasOwnProperty("lay") &&
                              ((i.layOdds = e.price.lay[0].price),
                              (i.layRemainingStakes = e.price.lay[0].size),
                              (i.status = e.status)));
                        });
                      });
                    });
                }),
                (this.keysArray = []),
                this.casinoEventListById.eventName ==
                  this.object.getConstants().CASINO.CARDS32 &&
                  ((this.player8 = this.casinoEventListById.cardsArr.PLAYER_8),
                  (this.player9 = this.casinoEventListById.cardsArr.PLAYER_9),
                  (this.player10 = this.casinoEventListById.cardsArr.PLAYER_10),
                  (this.player11 =
                    this.casinoEventListById.cardsArr.PLAYER_11)),
                this.casinoEventListById.marketArr.forEach((t, e) => {
                  null != t.runnersName &&
                    Object.keys(t.runnersName).forEach((t) => {
                      this.keysArray.push(t);
                    });
                }),
                this.player8)
              ) {
                let t,
                  e = 0,
                  n = this.player8[0],
                  i = this.player8[1];
                n &&
                  (e =
                    "J" == n.substring(1, 2)
                      ? 11
                      : "Q" == n.substring(1, 2)
                      ? 12
                      : "K" == n.substring(1, 2)
                      ? 13
                      : "1" == n.substring(1, 2)
                      ? 10
                      : "A" == n.substring(1, 2)
                      ? 1
                      : n.substring(1, 2)),
                  i &&
                    (t =
                      "J" == i.substring(1, 2)
                        ? 11
                        : "Q" == i.substring(1, 2)
                        ? 12
                        : "K" == i.substring(1, 2)
                        ? 13
                        : "1" == i.substring(1, 2)
                        ? 10
                        : "A" == i.substring(1, 2)
                        ? 1
                        : i.substring(1, 2)),
                  t && (e = Number(e) + Number(t));
              }
              if (this.player9) {
                let t,
                  e = 0,
                  n = this.player9[0],
                  i = this.player9[1];
                n &&
                  (e =
                    "J" == n.substring(1, 2)
                      ? 11
                      : "Q" == n.substring(1, 2)
                      ? 12
                      : "K" == n.substring(1, 2)
                      ? 13
                      : "1" == n.substring(1, 2)
                      ? 10
                      : "A" == n.substring(1, 2)
                      ? 1
                      : n.substring(1, 2)),
                  i &&
                    (t =
                      "J" == i.substring(1, 2)
                        ? 11
                        : "Q" == i.substring(1, 2)
                        ? 12
                        : "K" == i.substring(1, 2)
                        ? 13
                        : "1" == i.substring(1, 2)
                        ? 10
                        : "A" == i.substring(1, 2)
                        ? 1
                        : i.substring(1, 2)),
                  t && (e = Number(e) + Number(t));
              }
              if (this.player10) {
                let t,
                  e = 0,
                  n = this.player10[0],
                  i = this.player10[1];
                n &&
                  (e =
                    "J" == n.substring(1, 2)
                      ? 11
                      : "Q" == n.substring(1, 2)
                      ? 12
                      : "K" == n.substring(1, 2)
                      ? 13
                      : "1" == n.substring(1, 2)
                      ? 10
                      : "A" == n.substring(1, 2)
                      ? 1
                      : n.substring(1, 2)),
                  i &&
                    (t =
                      "J" == i.substring(1, 2)
                        ? 11
                        : "Q" == i.substring(1, 2)
                        ? 12
                        : "K" == i.substring(1, 2)
                        ? 13
                        : "1" == i.substring(1, 2)
                        ? 10
                        : "A" == i.substring(1, 2)
                        ? 1
                        : i.substring(1, 2)),
                  t && (e = Number(e) + Number(t));
              }
              if (this.player11) {
                let t,
                  e = 0,
                  n = this.player11[0],
                  i = this.player11[1];
                n &&
                  (e =
                    "J" == n.substring(1, 2)
                      ? 11
                      : "Q" == n.substring(1, 2)
                      ? 12
                      : "K" == n.substring(1, 2)
                      ? 13
                      : "1" == n.substring(1, 2)
                      ? 10
                      : "A" == n.substring(1, 2)
                      ? 1
                      : n.substring(1, 2)),
                  i &&
                    (t =
                      "J" == i.substring(1, 2)
                        ? 11
                        : "Q" == i.substring(1, 2)
                        ? 12
                        : "K" == i.substring(1, 2)
                        ? 13
                        : "1" == i.substring(1, 2)
                        ? 10
                        : "A" == i.substring(1, 2)
                        ? 1
                        : i.substring(1, 2)),
                  t && (e = Number(e) + Number(t));
              }
              this.raceCard = Object.keys(
                this.casinoEventListById.cardsArr
              ).reduce((t, e) =>
                this.casinoEventListById.cardsArr[t].length >
                this.casinoEventListById.cardsArr[e].length
                  ? t
                  : e
              );
            })
          ),
            setTimeout(() => {
              var t = this.timerValue ? this.timerValue : this.timer,
                e = document.getElementById("loader");
              e && (e.style.animation = "a-loader " + t + "s linear infinite"),
                this.casinoEventListById &&
                  this.casinoEventListById.status ==
                    this.object.getConstants().CASINO.ONLINE &&
                  (clearInterval(this.timerInterval), this.newtimer(t));
            }, 200);
        }
        firebaseEventForUpdate() {
          let t = this.object.getUtilInstance().getStore("roundID");
          setTimeout(() => {
            this.casinoEventListById.roundId != t &&
              (this.object
                .getUtilInstance()
                .storeState("roundID", this.casinoEventListById.roundId),
              this.getIndianCasinoEventDetail(this.eventId));
          }, 800);
        }
        getCainoChangeTriggerEvent(t) {}
        getIndianCasinoEventDetail(t) {
          var e, n;
          null ==
          this.object
            .getUtilInstance()
            .getStore(this.object.getConstants().STORAGE.token)
            ? ((e = this.object.getURLInstance().guestcasinoEventDetail),
              ((n = this.headers()).Authorization = ""))
            : ((e = this.object.getURLInstance().casinoEventDetail),
              (n = this.headers())),
            this.service
              .get(e, this.object.getConstants().PARAMSID.eventId + t, n)
              .toPromise()
              .then((e) => {
                (this.casinoEventDataList = e.data.indianCasinoEventDetails),
                  (this.loading = !1),
                  this.mySubscriptionEvent.length &&
                    this.mySubscriptionEvent.forEach((t) => t.unsubscribe()),
                  this.getCasinoDataByEventId(t),
                  e.data.indianCasinoEventDetails.forEach((t) => {
                    (this.runnerObj = []),
                      t.runners.forEach((e) => {
                        (e.playerExposure = isNaN(e.playerExposure)
                          ? 0
                          : parseFloat(e.playerExposure).toFixed(2)),
                          (e.exposure =
                            "ANDAR BAHAR" == t.eventName
                              ? `<span class=${
                                  e.playerExposure > 0
                                    ? "text-black"
                                    : 0 == e.playerExposure
                                    ? "text-black"
                                    : "text-red"
                                }>${e.playerExposure}</span>`
                              : `<span class=${
                                  e.playerExposure > 0
                                    ? "text-green"
                                    : 0 == e.playerExposure
                                    ? "text-black"
                                    : "text-red"
                                }>${
                                  e.playerExposure > 0
                                    ? "+" + e.playerExposure
                                    : e.playerExposure
                                }</span>`);
                      });
                  });
              })
              .catch((t) => {
                (this.loading = !1),
                  (403 != t.status && 401 != t.status) ||
                    this.router.navigate(["/casino"]),
                  this.setError(t);
              });
        }
        casinoPlayerBook() {
          this.unsubscribeExposer = this.broadCast
            .on(this.object.getConstants().BROADCASTKEY.CASINOBETSLIP)
            .subscribe((t) => {
              let e = t;
              this.casinoEventDataList &&
                this.casinoEventDataList.forEach((t) => {
                  t.runners.forEach((n) => {
                    let i = n.playerExposure ? n.playerExposure : 0,
                      s = i;
                    if ("ANDAR BAHAR" == t.eventName) return;
                    i = `<span class=${
                      i > 0 ? "text-green" : 0 == i ? "text-black" : "text-red"
                    }>${i}</span>`;
                    let l = 0;
                    e.find((e) => e.marketId == t.marketId)
                      ? e.forEach((e) => {
                          (l = parseFloat(l)),
                            (e.exchangeStake = parseFloat(e.exchangeStake)),
                            (e.odds = parseFloat(e.odds)),
                            "Casino_Market" == t.fancyCategory
                              ? (n.selectionId == e.selectionId
                                  ? 0 == e.sideType
                                    ? (l += (e.odds - 1) * e.exchangeStake)
                                    : (l -= (e.odds - 1) * e.exchangeStake)
                                  : 0 == e.sideType
                                  ? (l -= e.exchangeStake)
                                  : (l += e.exchangeStake),
                                (l = parseFloat(l).toFixed(2)),
                                (l = (l =
                                  parseFloat(l) + parseFloat(s)).toFixed(2)),
                                (n.exposure =
                                  i +
                                  this.to +
                                  (l = `<span class=${
                                    l > 0
                                      ? "text-green"
                                      : 0 == l
                                      ? "text-black"
                                      : "text-red"
                                  }>${l > 0 ? "+" + l : l}</span>`)))
                              : "Casino_Market1" == t.fancyCategory &&
                                n.selectionId == e.selectionId &&
                                ((l -= (e.odds - 1) * e.exchangeStake),
                                (l = parseFloat(l).toFixed(2)),
                                (l = (l =
                                  parseFloat(l) + parseFloat(s)).toFixed(2)),
                                (n.exposure =
                                  i +
                                  this.to +
                                  (l = `<span class=${
                                    l > 0
                                      ? "text-red"
                                      : 0 == l
                                      ? "text-black"
                                      : "text-red"
                                  }>${l > 0 ? "-" + l : l}</span>`)));
                        })
                      : (n.exposure = i);
                  });
                });
            });
        }
        goToEvetDetailPage(t, e) {
          if (
            t.gameType != this.object.getConstants().PNL.SUPERNOWA &&
            t.gameType != this.object.getConstants().PNL.DREAM_CASINO_ACE
          ) {
            if ("SUSPENDED" == t.status)
              return (
                (this.object.eventStatus = !0),
                void this.object
                  .getDOMInstance()
                  .showModal(
                    this.object.getDOMInstance().showModal("specialMarket")
                  )
              );
            t.imgUrl &&
              this.object.getUtilInstance().storeState("casinoImage", t.imgUrl),
              (this.object.eventStatus = !1),
              this.object
                .getUtilInstance()
                .storeState(this.object.getConstants().STORAGE.second, t.timer),
              setTimeout(() => {
                t.gameType == this.object.getConstants().PNL.POKER_CASINO
                  ? (this.object
                      .getUtilInstance()
                      .storeState(
                        this.object.getConstants().STORAGE.currency,
                        this.object.checkUserCurr
                      ),
                    window.open(
                      this.object.getUI_URL().user.casinoIframe +
                        "/" +
                        t.eventId,
                      "_self"
                    ))
                  : 0x72deb73f90e07 == t.eventId
                  ? window.open(
                      this.object.getUI_URL().user.casinoAnimation +
                        "/" +
                        t.eventId +
                        "/" +
                        t.streamName,
                      "_self"
                    )
                  : window.open(
                      this.object.getUI_URL().user.casinoEvent +
                        "/" +
                        t.eventId +
                        "/" +
                        t.streamName,
                      "_self"
                    );
              }, 100);
          } else "mobile" == e ? this.openMobileGames(t) : this.openGames(t);
        }
        gotoCasinoDetailPageFromSidebar(t) {
          if ("SUSPENDED" == t.status)
            return (
              (this.object.eventStatus = !0),
              void this.object
                .getDOMInstance()
                .showModal(
                  this.object.getDOMInstance().showModal("specialMarket")
                )
            );
          (this.object.eventStatus = !1),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.second, t.timer),
            setTimeout(() => {
              0x72deb73f90e07 == t.eventId
                ? window.open(
                    this.object.getUI_URL().user.casinoAnimation +
                      "/" +
                      t.eventId +
                      "/" +
                      t.streamName,
                    "_self"
                  )
                : window.open(
                    this.object.getUI_URL().user.casinoEvent +
                      "/" +
                      t.eventId +
                      "/" +
                      t.streamName,
                    "_self"
                  );
            }, 100);
          let e = {
            game_play: t.provider,
            game_type: t.gameType,
            gameplay_userid: [
              t.provider,
              this.object.getLoginInstance().state._id,
            ],
          };
          this.object.getEventlogGameClick(e), this.object.setUserProperties(e);
        }
        showRulesModal(t, e) {
          null != t &&
            null != t &&
            ((this.showInfo = e), this.object.getDOMInstance().showModal(t));
        }
        getAllCasinoEventListAdmin() {
          0 != this.object.getLoginInstance().state.ownerLevel &&
            this.service
              .get(
                this.object.getURLInstance().getAllCasinoEventStatusOwner,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                let e = [],
                  n = [],
                  i = [],
                  s = [],
                  l = [];
                t.data.games.forEach((t) => {
                  e.push(t);
                }),
                  (this.cainoList = e),
                  (s = e.filter(
                    (t) =>
                      t.gameType == this.object.getConstants().PNL.INDIAN_CASINO
                  )),
                  (n = e.filter(
                    (t) =>
                      t.gameType == this.object.getConstants().PNL.POKER_CASINO
                  )),
                  (i = e.filter(
                    (t) =>
                      t.gameType == this.object.getConstants().PNL.SUPERNOWA
                  )),
                  (l = e.filter(
                    (t) =>
                      t.gameType ==
                      this.object.getConstants().PNL.DREAM_CASINO_ACE
                  )),
                  (this.iceCasinoList = [...s, ...n, ...i, ...l]),
                  (this.liveCasinoList = this.iceCasinoList),
                  (this.showcrencyEnableDisable = []),
                  this.showCurrencyOnUI(),
                  this.handleSwitchTabs(
                    this.object.getConstants().PNL.INDIAN_CASINO,
                    1
                  ),
                  setTimeout(() => {
                    this.getAllCurrency();
                  }, 1e3);
              });
        }
        getLiveCasinoEventListAdmin() {
          0 != this.object.getLoginInstance().state.ownerLevel &&
            ((this.loading = !0),
            this.service
              .get(
                this.object.getURLInstance().getLiveCasinoEventStatusOwnerGrid,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.loading = !1;
                let e = [];
                (this.IntCasinoListLive = (e = t.data.games).filter(
                  (t) =>
                    t.gameType ==
                      this.object.getConstants().PNL.INTERNATIONAL_CASINO ||
                    t.gameType == this.object.getConstants().PNL.JILIGAMES ||
                    t.gameType == this.object.getConstants().PNL.TURBOGAMES ||
                    t.gameType == this.object.getConstants().PNL.SUPERNOWA ||
                    (t.gameType == this.object.getConstants().PNL.AWCGAMES &&
                      t.type != this.object.getConstants().PNL.SLOTS) ||
                    t.gameType == this.object.getConstants().PNL.DREAM_CASINO ||
                    t.gameType == this.object.getConstants().PNL.CREEDROOMZ
                )),
                  (this.slotsAndBingoLive = e.filter(
                    (t) =>
                      t.gameType ==
                        this.object.getConstants().PNL.SLOT_AND_BINGO ||
                      (t.gameType == this.object.getConstants().PNL.AWCGAMES &&
                        t.type == this.object.getConstants().PNL.SLOTS)
                  ));
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              }));
        }
        getAllCasinoEventList() {
          (this.skltonLoader = !0),
            this.service
              .get(
                this.object.getURLInstance().getAllCasinoEventStatus,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                let e = [];
                (this.playerIceCasino = []),
                  this.object.whitelableWithgameType() &&
                    (t.data.games = t.data.games.filter((t) => {
                      if (
                        this.object.gameTypeForWhiteLable.includes(t.gameType)
                      )
                        return !0;
                    })),
                  this.object.whitelableWITHOUTgameType() &&
                    (t.data.games = t.data.games.filter(
                      (t) =>
                        !this.object.gameTypeForWhiteLable.includes(t.gameType)
                    )),
                  t.data.games.forEach((t) => {
                    t.provider !=
                      this.object.getConstants().CASINO.LIVELOTTERY &&
                      t.provider !=
                        this.object.getConstants().CASINO.CARDJUDGMENT &&
                      ((t.imageUrl =
                        t.gameType ==
                          this.object.getConstants().PNL.JILIGAMES &&
                        "Andar Bahar" == t.provider
                          ? "jiliandarbahar"
                          : t.gameType ==
                            this.object.getConstants().PNL.SUPERNOWA
                          ? t.eventId
                          : t.provider.replace(/\s/g, "").toLowerCase()),
                      t.gameType ==
                        this.object.getConstants().PNL.POKER_CASINO &&
                      "Andar Bahar" == t.provider
                        ? (t.imageUrl = "pokerandarbahar")
                        : t.gameType ==
                            this.object.getConstants().PNL.POKER_CASINO &&
                          "Dragon Tiger" == t.provider &&
                          (t.imageUrl = "pokerdragontiger"),
                      t.imageUrl &&
                        t.imageUrl.includes("-") &&
                        (t.imageUrl = t.imageUrl.split("-").join("")),
                      e.push(t));
                  }),
                  (this.cainoList = e),
                  (this.pokerCasino = e.filter(
                    (t) =>
                      t.gameType == this.object.getConstants().PNL.POKER_CASINO
                  )),
                  (this.supernowaCasino = e.filter(
                    (t) =>
                      t.gameType == this.object.getConstants().PNL.SUPERNOWA
                  )),
                  (this.royalgaming = e.filter(
                    (t) =>
                      t.gameType ==
                      this.object.getConstants().PNL.DREAM_CASINO_ACE
                  )),
                  (this.playerIceCasino = [
                    ...this.pokerCasino,
                    ...this.supernowaCasino,
                    ...this.royalgaming,
                  ]),
                  this.showCurrencyOnUI(),
                  this.switchStudio("All"),
                  this.switchGames("All"),
                  "yes" == this.object.getUtilInstance().getStore("poker") &&
                    (this.switchStudio(
                      this.object.getConstants().PNL.POKER_CASINO
                    ),
                    setTimeout(() => {
                      this.object.getUtilInstance().removeState("poker");
                    }, 5e3)),
                  this.getproviderFilterAceCasino(),
                  this.getTypeFilterAceCasino(),
                  setTimeout(() => {
                    this.getAllCurrency(),
                      (this.skltonLoader = !1),
                      this.checkExistInList(this.cainoList);
                  }, 1e3);
              });
        }
        getLiveCasinoEventList() {
          (this.skltonLoader = !0),
            this.service
              .get(
                this.object.getURLInstance().getLiveCasinoEventStatus,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                let e = [];
                this.object.whitelableWITHOUTgameType() &&
                  ((t.data.games = t.data.games.filter(
                    (t) =>
                      !this.object.gameTypeForWhiteLable.includes(t.gameType)
                  )),
                  (t.data.games = t.data.games.filter(
                    (t) =>
                      !this.object.gameTypeForWhiteLable.includes(t.provider)
                  ))),
                  t.data.games.forEach((t) => {
                    e.push(t);
                  });
                var n = e.filter(
                  (t) =>
                    t.gameType ==
                      this.object.getConstants().PNL.INTERNATIONAL_CASINO ||
                    t.gameType == this.object.getConstants().PNL.JILIGAMES ||
                    t.gameType == this.object.getConstants().PNL.TURBOGAMES ||
                    t.gameType == this.object.getConstants().PNL.SUPERNOWA ||
                    (t.gameType == this.object.getConstants().PNL.AWCGAMES &&
                      t.type != this.object.getConstants().PNL.SLOTS) ||
                    t.gameType == this.object.getConstants().PNL.DREAM_CASINO ||
                    t.gameType == this.object.getConstants().PNL.CREEDROOMZ
                );
                (this.playerLiveCasino = n),
                  (this.cainoList = n),
                  (this.playerSlotBingo = e.filter(
                    (t) =>
                      t.gameType ==
                        this.object.getConstants().PNL.SLOT_AND_BINGO ||
                      (t.gameType == this.object.getConstants().PNL.AWCGAMES &&
                        t.type == this.object.getConstants().PNL.SLOTS)
                  )),
                  this.getproviderFilter(),
                  this.getTypeFilter(),
                  (this.activeProvider = "All"),
                  (this.activegameType = "All"),
                  setTimeout(() => {
                    this.skltonLoader = !1;
                  }, 1e3);
              });
        }
        checkEventStatus() {
          0 != this.cainoList.length &&
            (this.cainoList.forEach((t) => {
              (t.eventId != this.eventId && t.eventId != this.gameUrl) ||
                "SUSPENDED" != t.status ||
                (this.object.getDOMInstance().error("This event is suspended!"),
                (this.eventId = null),
                (this.gameUrl = null),
                this.router.navigate([""]));
            }),
            this.cainoList.some(
              (t) => t.eventId == this.eventId || t.eventId == this.gameUrl
            ) ||
              (this.object.getDOMInstance().error("This event is suspended!"),
              this.router.navigate([""])));
        }
        checkExistInList(t) {
          let e = this.object.getUtilInstance().getStore("_rId");
          if (0 != t.length && e) {
            if (
              ((this.object._isRecentEvent = t.some((t) => t.eventId == e)),
              !this.object._isRecentEvent)
            ) {
              let t = JSON.parse(
                this.object.getUtilInstance().getStore("recents")
              );
              if (t) {
                let n = t.findIndex((t) => t.eventId == e);
                t.splice(n, 1),
                  -1 != n &&
                    this.object
                      .getUtilInstance()
                      .storeState("recents", JSON.stringify(t));
              }
              this.object.getDOMInstance().error("This event is suspended!"),
                this.router.navigate([""]);
            }
            this.object.getUtilInstance().removeState("_rId");
          }
        }
        showCurrencyOnUI() {
          3 != this.gameTypeTabs &&
            2 != this.gameTypeTabs &&
            (this.iceCasinoList.forEach((t, e) => {
              (t.showCurr = [
                {
                  currency: "CI",
                  status: !0,
                  visible: !1,
                },
                {
                  currency: "CU",
                  status: !0,
                  visible: !1,
                },
                {
                  currency: "CH",
                  status: !0,
                  visible: !1,
                },
              ]),
                (t.showVisible = [
                  {
                    currency: "CI",
                    status: !1,
                    visible: !0,
                  },
                  {
                    currency: "CU",
                    status: !1,
                    visible: !0,
                  },
                  {
                    currency: "CH",
                    status: !1,
                    visible: !0,
                  },
                ]),
                t.showCurr.forEach((n, i) => {
                  t.allowedCurrency &&
                    t.allowedCurrency.forEach((t) => {
                      n.currency == t &&
                        (this.iceCasinoList[e].showCurr[i].status = !1);
                    });
                }),
                t.showVisible.forEach((n, i) => {
                  t.visibleCurrencyList &&
                    t.visibleCurrencyList.forEach((t) => {
                      n.currency == t &&
                        (this.iceCasinoList[e].showVisible[i].status = !0);
                    });
                });
            }),
            (this.commonGamneList = this.iceCasinoList));
        }
        showCurrencyOnIntCasino() {
          3 != this.gameTypeTabs &&
            1 != this.gameTypeTabs &&
            (this.IntCasinoList.forEach((t, e) => {
              (t.showCurr = [
                {
                  currency: "CI",
                  status: !0,
                },
                {
                  currency: "CU",
                  status: !0,
                },
                {
                  currency: "CH",
                  status: !0,
                },
              ]),
                (t.showVisible = [
                  {
                    currency: "CI",
                    status: !1,
                  },
                  {
                    currency: "CU",
                    status: !1,
                  },
                  {
                    currency: "CH",
                    status: !1,
                  },
                ]),
                t.showCurr.forEach((n, i) => {
                  t.allowedCurrency &&
                    t.allowedCurrency.forEach((t) => {
                      n.currency == t &&
                        (this.IntCasinoList[e].showCurr[i].status = !1);
                    });
                }),
                t.showVisible.forEach((n, i) => {
                  t.visibleCurrencyList &&
                    t.visibleCurrencyList.forEach((t) => {
                      n.currency == t &&
                        (this.IntCasinoList[e].showVisible[i].status = !0);
                    });
                });
            }),
            2 == this.gameTypeTabs &&
              (this.commonGamneList = this.IntCasinoList));
        }
        showCurrencyForSlotAndBingo() {
          2 != this.gameTypeTabs &&
            2 != this.gameTypeTabs &&
            (this.slotsAndBingo.forEach((t, e) => {
              (t.showCurr = [
                {
                  currency: "CI",
                  status: !0,
                },
                {
                  currency: "CU",
                  status: !0,
                },
                {
                  currency: "CH",
                  status: !0,
                },
              ]),
                (t.showVisible = [
                  {
                    currency: "CI",
                    status: !1,
                  },
                  {
                    currency: "CU",
                    status: !1,
                  },
                  {
                    currency: "CH",
                    status: !1,
                  },
                ]),
                t.showCurr.forEach((n, i) => {
                  t.allowedCurrency &&
                    t.allowedCurrency.forEach((t) => {
                      n.currency == t &&
                        (this.slotsAndBingo[e].showCurr[i].status = !1);
                    });
                }),
                t.showVisible.forEach((n, i) => {
                  t.visibleCurrencyList &&
                    t.visibleCurrencyList.forEach((t) => {
                      n.currency == t &&
                        (this.slotsAndBingo[e].showVisible[i].status = !0);
                    });
                });
            }),
            3 == this.gameTypeTabs &&
              (this.commonGamneList = this.slotsAndBingo));
        }
        confirmUpdate() {
          this.activeGameType ==
            this.object.getConstants().PNL.INTERNATIONAL_CASINO ||
          this.activeGameType == this.object.getConstants().PNL.SLOT_AND_BINGO
            ? this.updateLiveCasinoStatus(null)
            : this.activeGameType == this.object.getConstants().PNL.VIRTUALSPORT
            ? this.updatevirtualSportsStatus(null)
            : this.updateStatus(null);
        }
        confirmCurencyChange() {
          this.object
            .getDOMInstance()
            .showModal(this.object.getDOMInstance().modal.confirmbox);
        }
        checkCurr(t, e, n, i) {
          "visible" == i
            ? t.target.checked
              ? t.target.value == this.object.getConstants().CURRENCY.CI
                ? e[n].visibleCurrencyList.splice(0, 0, t.target.value)
                : t.target.value == this.object.getConstants().CURRENCY.CU
                ? e[n].visibleCurrencyList.splice(1, 0, t.target.value)
                : e[n].visibleCurrencyList.splice(2, 0, t.target.value)
              : (e[n].visibleCurrencyList = e[n].visibleCurrencyList.filter(
                  (e) => e != t.target.value
                ))
            : t.target.checked
            ? (e[n].allowedCurrency = e[n].allowedCurrency.filter(
                (e) => e != t.target.value
              ))
            : t.target.value == this.object.getConstants().CURRENCY.CI
            ? e[n].allowedCurrency.splice(0, 0, t.target.value)
            : t.target.value == this.object.getConstants().CURRENCY.CU
            ? e[n].allowedCurrency.splice(1, 0, t.target.value)
            : e[n].allowedCurrency.splice(2, 0, t.target.value);
          let s = [];
          e.forEach((t) => {
            (t.visibleCurrencyList = t.visibleCurrencyList.filter(
              (t) => "" != t
            )),
              (t.allowedCurrency = t.allowedCurrency.filter((t) => "" != t)),
              s.push({
                eventId: t.eventId,
                currencyList: t.allowedCurrency,
                visibleCurrencyList: t.visibleCurrencyList,
                sequence: t.sequence,
              });
          }),
            (this.updateCasinoEvent = s);
        }
        checkVisible(t, e, n) {
          t.target.checked
            ? t.target.value == this.object.getConstants().CURRENCY.CI
              ? e[n].visibleCurrencyList.splice(0, 0, t.target.value)
              : t.target.value == this.object.getConstants().CURRENCY.CU
              ? e[n].visibleCurrencyList.splice(1, 0, t.target.value)
              : e[n].visibleCurrencyList.splice(2, 0, t.target.value)
            : (e[n].visibleCurrencyList = e[n].visibleCurrencyList.filter(
                (e) => e != t.target.value
              ));
          let i = [];
          e.forEach((t) => {
            i.push({
              eventId: t.eventId,
              currencyList: t.visibleCurrencyList,
              sequence: t.sequence,
            });
          }),
            (this.updateCasinoEvent = i);
        }
        handleSwitchTabs(t, e) {
          let n;
          (this.gameTypeTabs = e),
            (this.activeGameType = t),
            (this.gameType = t),
            (this.commonGamneList = []),
            t == this.object.getConstants().PNL.INDIAN_CASINO
              ? (this.showCurrencyOnUI(),
                (this.cainoList = this.iceCasinoList),
                (this.liveCasinoList = this.iceCasinoList),
                (this.playerLiveCasino = this.iceCasinoList),
                this.getAllCurrency(),
                "All" == this.activeProvider && (this.activeProvider = "All"),
                "All" == this.activegameType && (this.activegameType = "All"),
                this.getproviderFilterAceCasino(),
                this.getTypeFilterAceCasino(),
                this.switchProviderForAceCasino(this.activeProvider))
              : t == this.object.getConstants().PNL.INTERNATIONAL_CASINO
              ? ((this.providersType = this.activeProvider),
                (this.liveCasinoList = this.IntCasinoListLive),
                (this.playerLiveCasino = this.IntCasinoListLive),
                (this.cainoList = n = this.IntCasinoListLive),
                this.showCurrencyOnLiveCasino(),
                this.getproviderFilter(),
                this.getTypeFilter(),
                this.switchProvider(this.activeProvider),
                setTimeout(() => {
                  this.getAllCurrencyLive();
                }, 1e3))
              : t == this.object.getConstants().PNL.VIRTUALSPORT
              ? ((this.providersType = this.activeProvider),
                (this.liveCasinoList = this.virtualCasinoEventsList),
                (this.playerLiveCasino = this.virtualCasinoEventsList),
                (this.cainoList = n = this.virtualCasinoEventsList),
                this.showCurrencyOnLiveCasino(),
                setTimeout(() => {
                  this.getAllCurrencyLive();
                }, 1e3))
              : ((this.liveCasinoList = this.slotsAndBingoLive),
                this.showCurrencyOnLiveCasino(),
                setTimeout(() => {
                  this.getAllCurrencyLive();
                }, 1e3),
                (this.activeProvider = "All"),
                (this.activegameType = "All"));
        }
        confirmChange(t, e) {
          let n = "OPEN" == t.status ? "SUSPENDED" : "OPEN";
          (this.updateEvent.eventId = t.eventId),
            (this.updateEvent.status = n),
            (this.casinoEventName = t.provider),
            (this.updateEvent.currency = null),
            (this.updateEvent.enableCurrency = null),
            this.object
              .getDOMInstance()
              .showModal(this.object.getDOMInstance().modal.confirmbox);
        }
        suspendCurencyWise(t, e, n) {
          (this.selectedCurency.currency = t),
            (this.selectedCurency.eventId = n.eventId),
            (this.showcrencyEnableDisable[e] = !0);
        }
        setChangedItem(t, e) {
          null != this.selectedCurency.currency &&
            null != this.selectedCurency.currency &&
            (this.selectedCurency.eventId == e.eventId
              ? ((this.updateEvent.currency = this.selectedCurency.currency),
                (this.updateEvent.eventId = e.eventId),
                (this.updateEvent.enableCurrency = t),
                (this.updateEvent.status = null),
                this.object
                  .getDOMInstance()
                  .showModal(this.object.getDOMInstance().modal.confirmbox))
              : (this.getAllCasinoEventList(),
                (this.selectedCurency.currency = null),
                (this.selectedCurency.eventId = null),
                (this.showcrencyEnableDisable = []),
                this.object
                  .getDOMInstance()
                  .error("EventId did not Matched!")));
        }
        loader() {
          (this.loading = !0),
            setTimeout(() => {
              this.loading = !1;
            }, 400);
        }
        getGameUrl(t) {
          let e, n;
          var i;
          (e = this.object.getURLInstance().gamesList),
            (n = this.object.getConstants().PARAMSID.balance + this.jiliCoin),
            (this.loading = !0),
            (i =
              null ==
              this.object
                .getUtilInstance()
                .getStore(this.object.getConstants().STORAGE.token)
                ? this.headers({
                    "x-game-uuid": t,
                    Authorization: "",
                  })
                : this.headers({
                    "x-game-uuid": t,
                  })),
            this.service
              .get(e, n, i)
              .toPromise()
              .then((t) => {
                (this.gameUrlLink =
                  this.senitizer.bypassSecurityTrustResourceUrl(t.url)),
                  setTimeout(() => {
                    this.loading = !1;
                  }, 4e3);
              })
              .catch((t) => {
                (this.loading = !1),
                  422 == t.status &&
                    this.router.navigate(
                      "D3" == this.object.themeChange.uxDesign
                        ? ["/casino"]
                        : ["/"]
                    ),
                  this.setError(t),
                  setTimeout(() => {
                    406 == t.status && window.history.back();
                  }, 2e3);
              });
        }
        getJiliGameUrl(t, e) {
          let n,
            i,
            s = this.object.getUtilInstance().getStore("liveCasinoType"),
            l = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.ACCESSKEY);
          var a;
          if (
            ((l = l || ""),
            s || (s = e),
            null ==
            this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token)
              ? ((this.userCurrency = "CI"),
                (a = this.headers({
                  "x-game-uuid": t,
                  "x-currency": this.userCurrency,
                  Authorization: "",
                })))
              : ((this.userCurrency = this.object.palyerSelfInfo.currency),
                (a = this.headers({
                  "x-game-uuid": t,
                  "x-currency": this.userCurrency,
                }))),
            (i =
              this.object.getConstants().PARAMSID.balance +
              this.jiliCoin +
              "&" +
              this.object.getConstants().PARAMSID.gameid +
              t),
            s == this.object.getConstants().PNL.TURBOGAMES)
          )
            n = this.object.getURLInstance().turbogames;
          else if (s == this.object.getConstants().PNL.SUPERNOWA)
            n = this.object.getURLInstance().supernova;
          else if (s == this.object.getConstants().PNL.JILIGAMES)
            n = this.object.getURLInstance().jiligames;
          else if (s == this.object.getConstants().PNL.AWCGAMES) {
            n = this.object.getURLInstance().awcgames;
            let e = window.origin;
            i =
              this.object.getConstants().PARAMSID.balance +
              this.jiliCoin +
              "&" +
              this.object.getConstants().PARAMSID.gameid +
              t +
              "&" +
              this.object.getConstants().PARAMSID.returnUrl +
              e;
          } else if (s == this.object.getConstants().PNL.DREAM_CASINO) {
            n = this.object.getURLInstance().dreamgames;
            let e = window.origin;
            i =
              this.object.getConstants().PARAMSID.balance +
              this.jiliCoin +
              "&" +
              this.object.getConstants().PARAMSID.gameid +
              t +
              "&" +
              this.object.getConstants().PARAMSID.returnUrl +
              e +
              "&" +
              this.object.getConstants().PARAMSID.key +
              l;
          } else if (s == this.object.getConstants().PNL.DREAM_CASINO_ACE) {
            n = this.object.getURLInstance().royalgaming;
            let e = window.origin;
            i =
              this.object.getConstants().PARAMSID.balance +
              this.jiliCoin +
              "&" +
              this.object.getConstants().PARAMSID.gameid +
              t +
              "&" +
              this.object.getConstants().PARAMSID.returnUrl +
              e +
              "&" +
              this.object.getConstants().PARAMSID.countryCode +
              "IN";
          } else if (s == this.object.getConstants().PNL.CREEDROOMZ) {
            n = this.object.getURLInstance().creedroomz;
            let e = window.origin,
              s = window.origin,
              l = this.object.detectMobiledevies ? "2" : "1",
              a = "en",
              o = "1" != l;
            i =
              this.object.getConstants().PARAMSID.balance +
              this.jiliCoin +
              "&" +
              this.object.getConstants().PARAMSID.gameid +
              t +
              "&" +
              this.object.getConstants().PARAMSID.depositUrl +
              s +
              "&" +
              this.object.getConstants().PARAMSID.deviceType +
              l +
              "&" +
              this.object.getConstants().PARAMSID.lang +
              a +
              "&" +
              this.object.getConstants().PARAMSID.returnUrl +
              e +
              "&" +
              this.object.getConstants().PARAMSID.isMobile +
              o;
          } else
            (n = this.object.getURLInstance().gamesList),
              (i = this.object.getConstants().PARAMSID.balance + this.jiliCoin);
          (this.loading = !1),
            setTimeout(() => {
              this.object
                .getUtilInstance()
                .storeState(this.object.getConstants().STORAGE.COIN, 0);
            }, 100),
            this.service
              .get(n, i, a)
              .toPromise()
              .then((t) => {
                (this.gameUrlLink =
                  this.senitizer.bypassSecurityTrustResourceUrl(
                    t.url ? t.url : t.data.data
                  )),
                  setTimeout(() => {
                    this.object
                      .getUtilInstance()
                      .storeState(this.object.getConstants().STORAGE.COIN, 0),
                      (this.loading = !1),
                      this.broadCast.broadcast(
                        this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
                      );
                  }, 100);
              })
              .catch((t) => {
                (this.loading = !1),
                  422 == t.status &&
                    ("SUPER_NOWA" == s
                      ? this.router.navigate(["/casino"])
                      : s == this.object.getConstants().PNL.JILIGAMES ||
                        s == this.object.getConstants().PNL.TURBOGAMES
                      ? this.router.navigate(
                          this.object.detectMobile
                            ? ["/casino/live-casino"]
                            : ["/casino-games/live-casino"]
                        )
                      : this.router.navigate(["/"])),
                  this.setError(t),
                  setTimeout(() => {
                    406 == t.status && window.history.back();
                  }, 2e3);
              });
        }
        openGames(t) {
          if ("SUSPENDED" == t.status)
            return (
              (this.object.eventStatus = !0),
              void this.object
                .getDOMInstance()
                .showModal(
                  this.object.getDOMInstance().showModal("specialMarket")
                )
            );
          (this.casinoObject = t),
            !this.object.getLoginInstance().getIsLogin() ||
            this.demoUserList.some(
              (t) => t == this.object.palyerSelfInfo.userName
            )
              ? (this.object
                  .getDOMInstance()
                  .hideModal(this.object.getConstants().STORAGE.COINSLIDER),
                this.object
                  .getUtilInstance()
                  .storeState(this.object.getConstants().STORAGE.COIN, 0),
                (this.tansfercoinAmount = 0),
                this.openLivecasinoGame())
              : this.object
                  .getDOMInstance()
                  .showModal(this.object.getConstants().STORAGE.COINSLIDER),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.LiveCasinoGameType,
                t.gameType
              ),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.ACCESSKEY, t.key),
            t.currConv
              ? this.object
                  .getUtilInstance()
                  .storeState(
                    this.object.getConstants().STORAGE.CURRENCYCONV,
                    !0
                  )
              : this.object
                  .getUtilInstance()
                  .removeState(this.object.getConstants().STORAGE.CURRENCYCONV),
            this.googleAnalytic(t);
        }
        openLivecasinoGame() {
          (this.loading = !0),
            setTimeout(() => {
              this.loading = !1;
              let t = this.object
                .getUtilInstance()
                .getStore(
                  this.object.getConstants().STORAGE.LiveCasinoGameType
                );
              "CI" == this.object.checkUserCurr &&
              this.demoUserList.some(
                (t) => t == this.object.palyerSelfInfo.userName
              )
                ? window.open(
                    this.object.getUI_URL().user.intEvent +
                      "/" +
                      this.casinoObject.eventId,
                    "_self"
                  )
                : "CI" == this.object.checkUserCurr
                ? !this.object.themeUXChange.superAdmins.some(
                    (t) =>
                      t.user_id ==
                        this.object.getLoginInstance().state.user_TntId &&
                      1 == t.c_conv
                  ) ||
                  (t != this.object.getConstants().PNL.INTERNATIONAL_CASINO &&
                    t != this.object.getConstants().PNL.SLOT_AND_BINGO)
                  ? this.casinoObject.currConv
                    ? this.object
                        .getDOMInstance()
                        .showModal(
                          this.object.getDOMInstance().modal.curencyInfo
                        )
                    : window.open(
                        this.object.getUI_URL().user.intEvent +
                          "/" +
                          this.casinoObject.eventId,
                        "_self"
                      )
                  : this.object
                      .getDOMInstance()
                      .showModal(this.object.getDOMInstance().modal.curencyInfo)
                : window.open(
                    this.object.getUI_URL().user.intEvent +
                      "/" +
                      this.casinoObject.eventId,
                    "_self"
                  );
            }, 1e3);
        }
        getMobileGameUrl(t) {
          (this.loading = !0),
            this.service
              .get(
                this.object.getURLInstance().gamesList,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers({
                  "x-game-uuid": t,
                })
              )
              .toPromise()
              .then((t) => {
                let e = t.url;
                (this.loading = !1), e && window.open(e, "_self");
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              });
        }
        openMobileGames(t) {
          if ("SUSPENDED" == t.status)
            return (
              (this.object.eventStatus = !0),
              void this.object
                .getDOMInstance()
                .showModal(
                  this.object.getDOMInstance().showModal("specialMarket")
                )
            );
          (this.casinoObject = t),
            !this.object.getLoginInstance().getIsLogin() ||
            this.demoUserList.some(
              (t) => t == this.object.palyerSelfInfo.userName
            )
              ? (this.object
                  .getDOMInstance()
                  .hideModal(this.object.getConstants().STORAGE.COINSLIDER),
                this.object
                  .getUtilInstance()
                  .storeState(this.object.getConstants().STORAGE.COIN, 0),
                (this.tansfercoinAmount = 0),
                this.openLivecasinoGameMobile())
              : this.object
                  .getDOMInstance()
                  .showModal(this.object.getConstants().STORAGE.COINSLIDER),
            this.object
              .getUtilInstance()
              .storeState(
                this.object.getConstants().STORAGE.LiveCasinoGameType,
                t.gameType
              ),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.ACCESSKEY, t.key),
            t.currConv
              ? this.object
                  .getUtilInstance()
                  .storeState(
                    this.object.getConstants().STORAGE.CURRENCYCONV,
                    !0
                  )
              : this.object
                  .getUtilInstance()
                  .removeState(this.object.getConstants().STORAGE.CURRENCYCONV),
            this.googleAnalytic(t);
        }
        back() {
          this.router.navigate(["casino"]);
        }
        openLivecasinoGameMobile() {
          (this.loading = !0),
            setTimeout(() => {
              this.loading = !1;
              let t = this.object
                .getUtilInstance()
                .getStore(
                  this.object.getConstants().STORAGE.LiveCasinoGameType
                );
              "CI" == this.object.checkUserCurr &&
              this.demoUserList.some(
                (t) => t == this.object.palyerSelfInfo.userName
              )
                ? this.navigateToGame()
                : "CI" == this.object.checkUserCurr
                ? !this.object.themeUXChange.superAdmins.some(
                    (t) =>
                      t.user_id ==
                        this.object.getLoginInstance().state.user_TntId &&
                      1 == t.c_conv
                  ) ||
                  (t != this.object.getConstants().PNL.INTERNATIONAL_CASINO &&
                    t != this.object.getConstants().PNL.SLOT_AND_BINGO)
                  ? this.casinoObject.currConv
                    ? this.object
                        .getDOMInstance()
                        .showModal(
                          this.object.getDOMInstance().modal.curencyInfo
                        )
                    : this.navigateToGame()
                  : this.object
                      .getDOMInstance()
                      .showModal(this.object.getDOMInstance().modal.curencyInfo)
                : this.navigateToGame();
            }, 800);
        }
        navigateToGame() {
          this.updateBalanceOnSameTab(),
            window.open(
              this.object.getUI_URL().user.mobileIntCasino +
                "/" +
                this.casinoObject.eventId,
              "_blank"
            );
        }
        updateBalanceOnSameTab() {
          setTimeout(() => {
            this.broadCast.broadcast(
              this.object.getConstants().BROADCASTKEY.GETPLAYERINFO,
              {
                value: !0,
              }
            );
          }, 7e3);
        }
        getAllCurrency() {
          this.object.isAdminLogin() &&
            ((this.currencyCI = !0),
            (this.currencyCH = !0),
            (this.currencyCU = !0),
            (this.visibleCI = !0),
            (this.visibleCU = !0),
            (this.visibleCH = !0),
            this.commonGamneList.forEach((t) => {
              t.showCurr.forEach((e) => {
                "CI" == e.currency &&
                  t.allowedCurrency.indexOf(
                    this.object.getConstants().CURRENCY.CI
                  ) >= 0 &&
                  (this.currencyCI = !1),
                  "CH" == e.currency &&
                    t.allowedCurrency.indexOf(
                      this.object.getConstants().CURRENCY.CH
                    ) >= 0 &&
                    (this.currencyCH = !1),
                  "CU" == e.currency &&
                    t.allowedCurrency.indexOf(
                      this.object.getConstants().CURRENCY.CU
                    ) >= 0 &&
                    (this.currencyCU = !1);
              }),
                t.showVisible.forEach((e) => {
                  "CI" == e.currency &&
                    t.visibleCurrencyList.indexOf(
                      this.object.getConstants().CURRENCY.CI
                    ) < 0 &&
                    (this.visibleCI = !1),
                    "CH" == e.currency &&
                      t.visibleCurrencyList.indexOf(
                        this.object.getConstants().CURRENCY.CH
                      ) < 0 &&
                      (this.visibleCH = !1),
                    "CU" == e.currency &&
                      t.visibleCurrencyList.indexOf(
                        this.object.getConstants().CURRENCY.CU
                      ) < 0 &&
                      (this.visibleCU = !1);
                });
            }));
        }
        getAllCurrencyLive() {
          this.object.isAdminLogin() &&
            ((this.visibleCILive = !0),
            (this.visibleCULive = !0),
            (this.visibleCHLive = !0),
            this.liveCasinoList.forEach((t) => {
              t.showVisible.forEach((e) => {
                "CI" == e.currency &&
                  t.visibleCurrencyList.indexOf(
                    this.object.getConstants().CURRENCY.CI
                  ) < 0 &&
                  (this.visibleCILive = !1),
                  "CH" == e.currency &&
                    t.visibleCurrencyList.indexOf(
                      this.object.getConstants().CURRENCY.CH
                    ) < 0 &&
                    (this.visibleCHLive = !1),
                  "CU" == e.currency &&
                    t.visibleCurrencyList.indexOf(
                      this.object.getConstants().CURRENCY.CU
                    ) < 0 &&
                    (this.visibleCULive = !1);
              });
            }));
        }
        checkAllCurrency(t, e, n) {
          e.forEach(
            "visible" != n
              ? (e) => {
                  t.target.checked
                    ? ((e.allowedCurrency = e.allowedCurrency.filter(
                        (e) => e != t.target.value
                      )),
                      t.target.value == this.object.getConstants().CURRENCY.CI
                        ? (this.currencyCI = !0)
                        : t.target.value ==
                          this.object.getConstants().CURRENCY.CU
                        ? (this.currencyCU = !0)
                        : t.target.value ==
                            this.object.getConstants().CURRENCY.CH &&
                          (this.currencyCH = !0))
                    : e.allowedCurrency.indexOf(t.target.value) < 0 &&
                      (t.target.value == this.object.getConstants().CURRENCY.CI
                        ? (e.allowedCurrency.splice(0, 0, t.target.value),
                          (this.currencyCI = !1))
                        : t.target.value ==
                          this.object.getConstants().CURRENCY.CU
                        ? ((this.currencyCU = !1),
                          e.allowedCurrency.splice(1, 0, t.target.value))
                        : ((this.currencyCH = !1),
                          e.allowedCurrency.splice(2, 0, t.target.value))),
                    e.showCurr.forEach((e) => {
                      e.currency == t.target.value &&
                        (e.status = t.target.checked);
                    });
                }
              : (e) => {
                  t.target.checked
                    ? e.visibleCurrencyList.indexOf(t.target.value) < 0 &&
                      (t.target.value == this.object.getConstants().CURRENCY.CI
                        ? (e.visibleCurrencyList.splice(0, 0, t.target.value),
                          (this.visibleCI = !0))
                        : t.target.value ==
                          this.object.getConstants().CURRENCY.CU
                        ? ((this.visibleCU = !0),
                          e.visibleCurrencyList.splice(1, 0, t.target.value))
                        : ((this.visibleCH = !0),
                          e.visibleCurrencyList.splice(2, 0, t.target.value)))
                    : ((e.visibleCurrencyList = e.visibleCurrencyList.filter(
                        (e) => e != t.target.value
                      )),
                      t.target.value == this.object.getConstants().CURRENCY.CI
                        ? (this.visibleCI = !1)
                        : t.target.value ==
                          this.object.getConstants().CURRENCY.CU
                        ? (this.visibleCU = !1)
                        : t.target.value ==
                            this.object.getConstants().CURRENCY.CH &&
                          (this.visibleCH = !1)),
                    e.showVisible.forEach((e) => {
                      e.currency == t.target.value &&
                        (e.status = t.target.checked);
                    });
                }
          );
          let i = [];
          e.forEach((t) => {
            (t.visibleCurrencyList = t.visibleCurrencyList.filter(
              (t) => "" != t
            )),
              i.push({
                eventId: t.eventId,
                currencyList: t.allowedCurrency,
                visibleCurrencyList: t.visibleCurrencyList,
                provider: t.provider,
              });
          }),
            (this.updateCasinoEvent = i),
            (this.updateLiveCasinoEvent = i);
        }
        switchStudio(t) {
          (this.activeStudio = t),
            (this.activeProvider = t),
            (this.playerIceCasino = this.cainoList.filter(
              "All" == t
                ? (t) =>
                    t.gameType ==
                      this.object.getConstants().PNL.INDIAN_CASINO ||
                    t.gameType == this.object.getConstants().PNL.POKER_CASINO ||
                    t.gameType == this.object.getConstants().PNL.SUPERNOWA ||
                    t.gameType ==
                      this.object.getConstants().PNL.DREAM_CASINO_ACE
                : (e) => e.gameType == t
            )),
            (this.activegameType = "All"),
            this.getTypeFilterAceCasino();
        }
        switchGames(t) {
          (this.activeStudio = t),
            "All" == t
              ? ((this.playerLiveCasino = this.cainoList.filter(
                  (t) =>
                    t.gameType ==
                      this.object.getConstants().PNL.INTERNATIONAL_CASINO ||
                    t.gameType == this.object.getConstants().PNL.JILIGAMES
                )),
                this.playerLiveCasino.sort((t, e) =>
                  t.gameType < e.gameType ? -1 : 1
                ))
              : (this.playerLiveCasino = this.cainoList.filter(
                  (e) => e.gameType == t
                ));
        }
        handleCasinoBet(t) {
          if (
            (setTimeout(() => {
              $(".newelement").remove(),
                (this.runerName = ""),
                this.resetAnimate(),
                (this.betplaceanimation = !1);
            }, 1e3),
            (this.loading = !0),
            t.exchangeStake <= 0)
          )
            return (
              this.object
                .getDOMInstance()
                .error("Stake value should not be zero"),
              void (this.loading = !1)
            );
          delete t.match,
            (t = [t]),
            this.service
              .post(
                this.object.getURLInstance().placeCasinoBet,
                t,
                this.headers()
              )
              .toPromise()
              .then(
                (t) => {
                  (this.loading = !1),
                    (this.object.betAPI = !1),
                    this.playBetPlaceAudio(),
                    this.broadCast.broadcast(
                      this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
                    ),
                    this.broadCast.broadcast(
                      this.object.getConstants().BETLIST.UPDATEBETLIST,
                      {
                        value: !0,
                      }
                    );
                },
                (e) => {
                  (this.loading = !1),
                    (this.stackValue = 0),
                    setTimeout(() => {
                      $(".newelement").remove(),
                        this.resetAnimate(),
                        (this.stackValue = this.oldstake);
                    }, 800),
                    "DRAGON" == t[0].runnerName
                      ? ((this.totalstack.t1 = 0),
                        (this.coinLastIndex.ind1 = null))
                      : "TIE" == t[0].runnerName
                      ? ((this.totalstack.t2 = 0),
                        (this.coinLastIndex.ind2 = null))
                      : "TIGER" == t[0].runnerName &&
                        ((this.totalstack.t3 = 0),
                        (this.coinLastIndex.ind3 = null)),
                    401 == e.status &&
                      this.object.getRouterInstance().navigate(["/casino"]),
                    this.setError(e);
                }
              );
        }
        resetAnimate() {
          setTimeout(() => {
            $(".newelement").remove();
            var t = document.createElement("div");
            t.setAttribute("class", "newelement"),
              t.setAttribute("id", "newelementdata"),
              t.setAttribute(
                "style",
                "z-index: 9999999;  opacity: 0;height: 45px; width: 45px;margin-top: -50px; text-align: center;background-image: url(assets/images/coins/coin" +
                  this.coinIndex +
                  ".svg); background-size: 80px; color: #fff;background-position:center;  position: absolute;"
              ),
              document.getElementById("add" + this.coinIndex).appendChild(t);
            var e = document.createElement("span");
            e.setAttribute(
              "style",
              " text-align: center;color: #fff;font-weight: 700;background-size: cover;margin: 15px 3px; align-items: center;display: flex; justify-content: center;"
            );
            var n = this.numberFormate(this.stackValue);
            (e.innerHTML = n),
              document.getElementById("newelementdata").appendChild(e);
          }, 100);
        }
        numberFormate(t) {
          return 0 == t
            ? 0
            : t <= 999
            ? t
            : t >= 1e3 && t <= 999999
            ? (t / 1e3).toFixed(1) + "K"
            : t >= 1e6 && t <= 999999999
            ? (t / 1e6).toFixed(1) + "M"
            : t >= 1e9 && t <= 999999999999
            ? (t / 1e6).toFixed(1) + "M"
            : t;
        }
        getCustomBet() {
          this.customBetList = JSON.parse(localStorage.getItem("stake"));
        }
        newtimer(t) {
          if (t < 0) return;
          const e = {
            info: {
              color: "green",
              threshold: t,
            },
            warning: {
              color: "orange",
              threshold: 5,
            },
            alert: {
              color: "red",
              threshold: 3,
            },
          };
          this.TIME_LIMIT = t;
          let n = 0;
          (this.timeLeft = 0),
            (this.timeLeft = this.TIME_LIMIT),
            (this.timerInterval = null),
            (this.remainingPathColor = e.info.color),
            (this.timerInterval = setInterval(() => {
              (n = n += 1), (this.timeLeft = this.TIME_LIMIT - n);
              var t = document.getElementById("base-timer-label");
              t && (t.innerHTML = JSON.stringify(this.timeLeft)),
                this.setCircleDasharray();
              const { warning: i, info: s } = e;
              if (this.timeLeft <= i.threshold) {
                document.getElementById(s.color);
                var l = document.getElementById("base-timer-path-remaining");
                l &&
                  (l.classList.add(i.color),
                  document
                    .getElementById("base-timer-label")
                    .classList.add("big"),
                  setTimeout(() => {
                    var t = document.getElementById("base-timer-label");
                    t && t.classList.remove("big");
                  }, 800));
              } else if (this.timeLeft <= s.threshold) {
                var a = document.getElementById("base-timer-path-remaining");
                a &&
                  (a.classList.remove(i.color),
                  document
                    .getElementById("base-timer-path-remaining")
                    .classList.add(s.color));
              }
              if (
                Number(this.timeLeft) <= 0 ||
                "SUSPEND" == this.casinoEventListById.status
              ) {
                var o = document.getElementById("base-timer-label");
                o && (o.innerHTML = JSON.stringify(0));
                var r = document.getElementById("base-timer-path-remaining");
                r && (r.classList.remove(i.color), r.classList.remove(s.color)),
                  clearInterval(this.timerInterval);
              }
            }, 1e3));
        }
        calculateTimeFraction() {
          const t = this.timeLeft / this.TIME_LIMIT;
          return t - (1 / this.TIME_LIMIT) * (1 - t);
        }
        setCircleDasharray() {
          const t = `${(283 * this.calculateTimeFraction()).toFixed(0)} 283`;
          var e = document.getElementById("base-timer-path-remaining");
          e && e.setAttribute("stroke-dasharray", t);
        }
        onTimesUp() {
          (this.timerInterval = 0), clearInterval(this.timerInterval);
        }
        playAudio() {
          let t = new Audio();
          (t.src = "assets/images/coins/selectchip.3131a.mp3"),
            t.load(),
            t.play(),
            (t.volume = 0.3);
        }
        playBetPlaceAudio() {
          let t = new Audio();
          (t.src = "assets/images/coins/placechip.eed83.mp3"),
            t.load(),
            t.play(),
            (t.volume = 0.4);
        }
        getPlayerExposer(t) {
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
                  (this.casinoMrketExposure = []),
                    (this.casinoMrketExposure = t.data),
                    this.casinoExposerMap();
                },
                (t) => {
                  this.setError(t);
                }
              );
        }
        casinoExposerMap() {
          this.casinoEventDataList.forEach((t) => {
            this.casinoMrketExposure.forEach((e) => {
              t.marketId == e.mktId &&
                t.runners.map((n) => {
                  n.id == e.sid &&
                    ("ANDAR BAHAR" == t.eventName
                      ? ((n.exposure = `<span class=${
                          e.ex > 0
                            ? "text-black"
                            : 0 == e.ex
                            ? "text-black"
                            : "text-red"
                        }>${e.ex}</span>`),
                        (n.playerExposure = e.ex))
                      : ((n.exposure = `<span class=${
                          e.ex > 0
                            ? "text-green"
                            : 0 == e.ex
                            ? "text-black"
                            : "text-red"
                        }>${e.ex}</span>`),
                        (n.playerExposure = e.ex)));
                });
            });
          });
        }
        showCurrencyOnLiveCasino() {
          this.liveCasinoList.forEach((t, e) => {
            (t.showCurr = [
              {
                currency: "CI",
                status: !0,
              },
              {
                currency: "CU",
                status: !0,
              },
              {
                currency: "CH",
                status: !0,
              },
            ]),
              (t.showVisible = [
                {
                  currency: "CI",
                  status: !1,
                },
                {
                  currency: "CU",
                  status: !1,
                },
                {
                  currency: "CH",
                  status: !1,
                },
              ]),
              t.showCurr.forEach((n, i) => {
                t.allowedCurrency &&
                  t.allowedCurrency.forEach((t) => {
                    n.currency == t &&
                      (this.liveCasinoList[e].showCurr[i].status = !1);
                  });
              }),
              t.showVisible.forEach((n, i) => {
                t.visibleCurrencyList &&
                  t.visibleCurrencyList.forEach((t) => {
                    n.currency == t &&
                      (this.liveCasinoList[e].showVisible[i].status = !0);
                  });
              });
          });
        }
        updateLiveCasino(t, e, n, i) {
          "visible" == i
            ? t.target.checked
              ? t.target.value == this.object.getConstants().CURRENCY.CI
                ? e[n].visibleCurrencyList.splice(0, 0, t.target.value)
                : t.target.value == this.object.getConstants().CURRENCY.CU
                ? e[n].visibleCurrencyList.splice(1, 0, t.target.value)
                : e[n].visibleCurrencyList.splice(2, 0, t.target.value)
              : (e[n].visibleCurrencyList = e[n].visibleCurrencyList.filter(
                  (e) => e != t.target.value
                ))
            : t.target.checked
            ? (e[n].allowedCurrency = e[n].allowedCurrency.filter(
                (e) => e != t.target.value
              ))
            : t.target.value == this.object.getConstants().CURRENCY.CI
            ? e[n].allowedCurrency.splice(0, 0, t.target.value)
            : t.target.value == this.object.getConstants().CURRENCY.CU
            ? e[n].allowedCurrency.splice(1, 0, t.target.value)
            : e[n].allowedCurrency.splice(2, 0, t.target.value);
          let s = [];
          e.forEach((t) => {
            (t.visibleCurrencyList = t.visibleCurrencyList.filter(
              (t) => "" != t
            )),
              s.push({
                provider: t.provider,
                gameType: t.gameType,
                eventId: t.eventId,
                currencyList: t.allowedCurrency,
                visibleCurrencyList: t.visibleCurrencyList,
                gnseq: t.gnseq,
                gtseq: t.gtseq,
                type: t.type,
                gameName: t.gameName,
                lobby: t.lobby,
                imageUrl: t.imgUrl,
              });
          }),
            (this.updateLiveCasinoEvent = s);
        }
        updateStatus(t) {
          t &&
            (this.liveCasinoList.forEach((e) => {
              e.eventId == this.editCasinoEvent.eventId && (e.imageUrl = t);
            }),
            (this.updateLiveCasinoEvent = this.liveCasinoList)),
            (this.loading = !0),
            (this.currencyCI = !1),
            (this.currencyCH = !1),
            (this.currencyCU = !1),
            this.service
              .adminpost(
                this.object.getURLInstance().updateCasinoGameStatus,
                this.updateLiveCasinoEvent,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.getAllCasinoEventListAdmin(),
                  this.object
                    .getDOMInstance()
                    .hideModal(this.object.getDOMInstance().modal.confirmbox),
                  (this.selectedCurency.currency = null),
                  (this.selectedCurency.eventId = null),
                  (this.updateEvent.eventId = null),
                  (this.showcrencyEnableDisable = []),
                  (this.loading = !1),
                  (this.editCasinoEventUrl = null),
                  this.object.getDOMInstance().success("Changes updated!");
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              });
        }
        updateLiveCasinoStatus(t) {
          t &&
            (this.liveCasinoList.forEach((e) => {
              e.eventId == this.editCasinoEvent.eventId && (e.imageUrl = t);
            }),
            (this.updateLiveCasinoEvent = this.liveCasinoList)),
            (this.loading = !0),
            (this.currencyCI = !1),
            (this.currencyCH = !1),
            (this.currencyCU = !1),
            this.service
              .adminpost(
                this.object.getURLInstance().updateLiveCasinoGameStatus,
                this.updateLiveCasinoEvent,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.getLiveCasinoEventListAdmin(),
                  this.object
                    .getDOMInstance()
                    .hideModal(this.object.getDOMInstance().modal.confirmbox),
                  (this.selectedCurency.currency = null),
                  (this.selectedCurency.eventId = null),
                  (this.updateEvent.eventId = null),
                  (this.showcrencyEnableDisable = []),
                  (this.loading = !1),
                  (this.editCasinoEventUrl = null),
                  this.object.getDOMInstance().success("Changes updated!"),
                  setTimeout(() => {
                    this.handleSwitchTabs(
                      this.activeGameType,
                      this.gameTypeTabs
                    );
                  }, 500);
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              });
        }
        updatevirtualSportsStatus(t) {
          t &&
            (this.liveCasinoList.forEach((e) => {
              e.eventId == this.editCasinoEvent.eventId && (e.imageUrl = t);
            }),
            (this.updateLiveCasinoEvent = this.liveCasinoList)),
            (this.loading = !0),
            (this.currencyCI = !1),
            (this.currencyCH = !1),
            (this.currencyCU = !1),
            this.service
              .adminpost(
                this.object.getURLInstance().updatevirtualSportsStatus,
                this.updateLiveCasinoEvent,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.getvirtualSportsEventListAdmin(),
                  this.object
                    .getDOMInstance()
                    .hideModal(this.object.getDOMInstance().modal.confirmbox),
                  (this.selectedCurency.currency = null),
                  (this.selectedCurency.eventId = null),
                  (this.updateEvent.eventId = null),
                  (this.showcrencyEnableDisable = []),
                  (this.loading = !1),
                  (this.editCasinoEventUrl = null),
                  this.object.getDOMInstance().success("Changes updated!"),
                  setTimeout(() => {
                    this.handleSwitchTabs(
                      this.activeGameType,
                      this.gameTypeTabs
                    );
                  }, 500);
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              });
        }
        switchProvider(t, e) {
          (this.activeProvider = t),
            (this.filterSeq = []),
            (this.typeFilteronUi = []),
            (this.activegameType = "All"),
            "All" == t
              ? ((this.playerLiveCasino = this.cainoList.filter(
                  (e) => e.provider != t
                )),
                this.playerLiveCasino.map((t, e) => {
                  t.gnseq = e + 1;
                }),
                (this.filterSeq = []))
              : ((this.playerLiveCasino = this.cainoList.filter(
                  (e) => e.provider == t
                )),
                this.playerLiveCasino.forEach((t) => {
                  this.filterSeq.push(t.gnseq);
                })),
            (this.liveCasinoList = this.playerLiveCasino),
            this.getTypeFilter(),
            this.getAllCurrencyLive(),
            e &&
              document.getElementById("provider" + e).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
        }
        switchProviderForAceCasino(t) {
          (this.activeProvider = t),
            (this.filterSeq = []),
            (this.typeFilteronUi = []),
            (this.activegameType = "All"),
            "All" == t
              ? ((this.playerLiveCasino = this.cainoList.filter(
                  (e) => e.gameType != t
                )),
                this.playerLiveCasino.map((t, e) => {
                  t.gnseq = e + 1;
                }),
                (this.filterSeq = []))
              : ((this.playerLiveCasino = this.cainoList.filter(
                  (e) => e.gameType == t
                )),
                this.playerLiveCasino.forEach((t) => {
                  this.filterSeq.push(t.gnseq);
                })),
            (this.liveCasinoList = this.playerLiveCasino),
            this.getTypeFilter(),
            this.getAllCurrencyLive();
        }
        switchType(t, e) {
          this.object.isAdminLogin() &&
            (t = {
              type: t,
            }),
            this.seoD2Casino(t),
            this.gameType != this.object.getConstants().PNL.INDIAN_CASINO
              ? ((this.filterSeq = []),
                (this.activegameType = t.type),
                document.getElementById("type" + e).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                }),
                (this.playerLiveCasino = this.cainoList.filter(
                  "All" == t.type && "All" != this.activeProvider
                    ? (e) =>
                        e.type != t.type && e.provider == this.activeProvider
                    : "All" == this.activeProvider && "All" != t.type
                    ? (e) => e.type == t.type
                    : "All" == this.activeProvider && "All" == t.type
                    ? (e) => e.type != t.type
                    : (e) =>
                        e.type == t.type && e.provider == this.activeProvider
                )),
                this.playerLiveCasino.sort((t, e) =>
                  t.gtseq == e.gtseq
                    ? t.gnseq < e.gnseq
                      ? -1
                      : 1
                    : t.gtseq < e.gtseq
                    ? -1
                    : 1
                ),
                (this.liveCasinoList = this.playerLiveCasino),
                (this.playerIceCasino = this.playerLiveCasino),
                this.liveCasinoList.forEach((t) => {
                  this.filterSeq.push(t.gnseq);
                }),
                this.getAllCurrencyLive())
              : this.switchTypeAce(t.type, e);
        }
        seoD2Casino(t) {
          this.object.isAdminLogin()
            ? (t = {
                type: t,
              })
            : "D2" == this.object.themeChange.uxDesign &&
              (this.router.navigate(
                this.object.detectMobiledevies
                  ? ["/casino/live-casino/" + t.seoUrl]
                  : ["/casino-games/live-casino/" + t.seoUrl]
              ),
              "blackjack" == t.type
                ? this.object.setmetaTagTitle(
                    this.object.getConstants().SEOMETATAG[2]
                  )
                : "roulette" == t.type &&
                  this.object.setmetaTagTitle(
                    this.object.getConstants().SEOMETATAG[3]
                  ));
        }
        getproviderFilter() {
          let t = new Map(),
            e = [];
          (this.intCasinoFilter = this.playerLiveCasino),
            e.push({
              provider: "All",
            }),
            this.intCasinoFilter.forEach((n) => {
              t.has(n.provider) || (t.set(n.provider, !0), e.push(n)),
                this.object.isAdminLogin() ||
                  (n.provider.includes("Evolution") &&
                    "DREAM_CASINO" == n.gameType &&
                    (n.provider = "Evolution Gaming"),
                  n.provider.includes("Ezugi") &&
                    "DREAM_CASINO" == n.gameType &&
                    (n.provider = "Ezugi Gaming"),
                  "DREAM_CASINO" == n.gameType &&
                    (n.provider = this.removeNumbersFromString(n.provider)));
            }),
            (this.intCasinoFilter = e);
        }
        removeNumbersFromString(t) {
          return t.replace(/\d+/g, "");
        }
        getproviderFilterAceCasino() {
          let t = new Map(),
            e = [];
          (this.AceCasinoProvider = this.cainoList),
            e.push({
              gameType: "All",
              provider: "All",
            }),
            this.AceCasinoProvider.forEach((n) => {
              t.has(n.gameType) || (t.set(n.gameType, !0), e.push(n));
            }),
            e.forEach((t) => {
              "All" == t.gameType
                ? ((t.imgpath = "/assets/images/All.png"), (t.sortseq = "a"))
                : "INDIAN_CASINO" == t.gameType
                ? ((t.imgpath = "/assets/images/studio1.png"),
                  (t.sortseq = "c"))
                : "POKER_CASINO" == t.gameType
                ? ((t.imgpath =
                    "/assets/images/" +
                    this.object.getConstants().CASINOPROVIDERADD.Aura +
                    ".png"),
                  (t.sortseq = "d"))
                : "DREAM_CASINO_ACE" == t.gameType
                ? ((t.imgpath = "/assets/images/royalgaming.png"),
                  (t.sortseq = "d"))
                : ((t.imgpath = "/assets/images/SuperNowa.png"),
                  (t.sortseq = "b"));
            }),
            (this.AceCasinoProvider = e),
            this.AceCasinoProvider.sort((t, e) =>
              t.sortseq < e.sortseq ? -1 : 1
            ),
            (this.intCasinoFilter = this.AceCasinoProvider),
            this.getTypeFilterAceCasino();
        }
        getTypeFilter() {
          let t = new Map(),
            e = [];
          (this.typeFilter = this.playerLiveCasino),
            e.push({
              type: "All",
              seoUrl: "evolutionGames",
            }),
            this.typeFilter.forEach((n) => {
              this.object.getConstants().intCasinoUrl.forEach((t) => {
                n.type == t.type && (n.seoUrl = t.seoUrl);
              }),
                t.has(n.type) || (t.set(n.type, !0), e.push(n));
            }),
            (this.typeFilter = e),
            (this.typeFilteronUi = e);
        }
        getTypeFilterAceCasino() {
          let t = new Map(),
            e = [];
          (this.typeFilter = this.playerIceCasino),
            e.push({
              provider: "All",
            }),
            this.typeFilter.forEach((n) => {
              (n.provider = n.provider.toLowerCase()),
                t.has(n.provider) || (t.set(n.provider, !0), e.push(n));
            }),
            (this.typeFilter = e),
            (this.typeFilteronUi = e),
            this.typeFilteronUi.forEach((t) => {
              t.type = t.provider;
            }),
            this.cainoList.forEach((t) => {
              t.type = t.provider;
            });
        }
        switchTypeAce(t, e) {
          t || (t = "All"),
            (this.filterSeq = []),
            (this.activegameType = t),
            document.getElementById("type" + e).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            }),
            (this.playerIceCasino = this.cainoList.filter(
              "All" == t && "All" != this.activeProvider
                ? (e) => e.type != t && e.gameType == this.activeProvider
                : "All" == this.activeProvider && "All" != t
                ? (e) => e.type.toLowerCase() == t.toLowerCase()
                : "All" == this.activeProvider && "All" == t
                ? (e) => e.type != t
                : (e) => e.type == t && e.gameType == this.activeProvider
            )),
            this.playerIceCasino.sort((t, e) => (t.gnseq < e.gnseq ? -1 : 1)),
            this.playerIceCasino.forEach((t) => {
              this.filterSeq.push(t.gnseq);
            }),
            (this.liveCasinoList = this.playerIceCasino);
        }
        switchTab(t) {
          this.handleSwitchTabs(this.activeGameType, this.gameTypeTabs);
        }
        trackByEvent(t, e) {
          return e.eventId;
        }
        trackByImage(t, e) {
          return e.eventId;
        }
        getvirtualSportsEventListAdmin() {
          0 != this.object.getLoginInstance().state.ownerLevel &&
            ((this.loading = !0),
            this.service
              .get(
                this.object.getURLInstance()
                  .getVirtualSportsEventStatusOwnerGrid,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.loading = !1;
                let e = [];
                this.virtualCasinoEventsList = e = t.data;
              })
              .catch((t) => {
                (this.loading = !1), this.setError(t);
              }));
        }
        googleAnalytic(t) {
          this.object.eventStatus = !1;
          let e = {
            game_play: t.provider,
            game_type: t.gameType,
            gameplay_userid: [
              t.provider,
              this.object.getLoginInstance().state._id,
            ],
          };
          this.object.getEventlogGameClick(e), this.object.setUserProperties(e);
        }
      }
      class K extends H {
        constructor(t, e, n, i, s, l, a, o) {
          super(t, e, n, i, s, o),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.routeParam = l),
            (this.changeDetector = a),
            (this.sanitizer = o),
            (this.object.activeWebLink =
              this.object.getConstants().PNL.INDIAN_CASINO);
        }
        ngOnInit() {
          "D2" != this.object.themeChange.uxDesign ||
            ("20210224" != this.object.themeChange.whitelableId &&
              "20210217" != this.object.themeChange.whitelableId) ||
            this.router.navigate(["/casino-games/live-casino/evolutionGames"]),
            this.loader(),
            this.object.onChangeEvents(),
            this.init(),
            this.getLiveCasinoEventList(),
            (this.object.activeWebLink =
              this.object.getConstants().PNL.LIVECASINO),
            (this.unsubscribeEventUpdate = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
              .subscribe((t) => {
                t.booleanKeys[0].casinoUpdated && this.getLiveCasinoEventList();
              }));
        }
        hideMultiplemodal() {
          this.object.getDOMInstance().hideModal("multipleTab"),
            this.openLivecasinoGame();
        }
        hidemodal() {
          this.object
            .getDOMInstance()
            .hideModal(this.object.getDOMInstance().modal.curencyInfo),
            this.getGameUrl(this.gameUrl),
            this.casinoObject &&
              window.open(
                this.object.getUI_URL().user.intEvent +
                  "/" +
                  this.casinoObject.eventId,
                "_self"
              );
        }
        hideNavigatelivecasino() {
          this.object
            .getDOMInstance()
            .hideModal(this.object.getDOMInstance().modal.lowbalance);
        }
        transfercoinToJiliGames(t) {
          (this.tansfercoinAmount = t),
            this.object
              .getDOMInstance()
              .hideModal(this.object.getConstants().STORAGE.COINSLIDER),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.COIN, t),
            this.openLivecasinoGame();
        }
        ngOnDestroy() {
          this.unsubscribeEventUpdate &&
            this.unsubscribeEventUpdate.unsubscribe(),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe();
        }
      }
      var W = i.ob({
        encapsulation: 0,
        styles: [
          [
            '.livescro[_ngcontent-%COMP%]{min-height:calc(100vh - 80px);color:#fff;padding-top:170px;background-image:url(liveimg.472ea5aaa67ed37f632a.jpg);padding-bottom:100px}.livescro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.livescro[_ngcontent-%COMP%]   .maintiti[_ngcontent-%COMP%]{margin:40px 0}.imagwitex[_ngcontent-%COMP%]{position:relative;cursor:pointer;min-height:130px}.imagwitex[_ngcontent-%COMP%]   .titbb[_ngcontent-%COMP%]{position:absolute;bottom:-10px;padding:40px 20px 30px;font-family:Oswald;text-transform:uppercase;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.88) 74.9%)}.matos[_ngcontent-%COMP%]{margin-bottom:10px;width:20%;padding:0 7px}.maibody[_ngcontent-%COMP%]{padding:0}.card-img-top[_ngcontent-%COMP%]{border-radius:4px}.popimgcoin[_ngcontent-%COMP%]{background-image:url(popupcoin.18a8bbb33acfc07fd651.png);background-size:105% 100%;border-radius:13px;text-align:center;color:#fff!important;background-position:-20px -20px;background-color:#1d1521!important;border:2px solid!important}.bodypa[_ngcontent-%COMP%]{padding:24px 0 15px}.bodypabal[_ngcontent-%COMP%]{padding:45px 0 35px}.footermm[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center}.footermm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--maindark)!important;width:102%;border-radius:0 0 10px 10px;color:#281d2e;margin:-2px -3px!important;padding:10px 0;font-size:17px;font-weight:700}.modal-dialog[_ngcontent-%COMP%]   .popimgcoin[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{border:none!important;position:absolute;right:0;z-index:999999999;border-radius:60px;margin-top:-20px;padding:0;margin-right:-19px}.mainheadinnn[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;margin:-85px 0 55px;text-transform:uppercase;font-size:medium;font-weight:700;border-bottom:solid 3px var(--maindark);padding-bottom:40px}.activeTab[_ngcontent-%COMP%], .newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent}.nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:5px 14px;margin:4px 3px 12px;font-size:medium;color:#fff;background-color:transparent;border-radius:4px}.nav-pills[_ngcontent-%COMP%]::-webkit-scrollbar{width:2px;height:4px;position:absolute}.filter-type[_ngcontent-%COMP%]{margin-left:16px}.filter-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:16px;margin-right:8px}.filter-type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:5px;font-weight:500;font-size:12px;line-height:16px;border-radius:4px;margin-top:2px;background:rgba(58,95,112,.1)}.filter-type[_ngcontent-%COMP%]   .dropdown-text[_ngcontent-%COMP%]{color:#000;background-color:#fff}.activeTab[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent!important;border-bottom:none!important;box-shadow:0 0 0 2px var(--maindark)!important;color:#fff}.activeProvider[_ngcontent-%COMP%]{border-bottom:none!important;background-color:transparent!important}a.active[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:0 0 0 2px var(--maindark)!important;color:#fff!important}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:0 5px}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{border-radius:4px;padding:5px;margin:0 3px;font-size:20px;color:#fff;background-color:#000;box-shadow:0 0 0 2px #fff;text-align:center}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;max-width:100%;-o-object-fit:contain;object-fit:contain}.headerimg[_ngcontent-%COMP%]{border-bottom:solid 2px var(--casino-color);margin-bottom:20px}.headerimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .headerimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:none}.imagwitex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:146.5px}.imagwitex[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--maindark);border-radius:4px}.imagwitex[_ngcontent-%COMP%]:hover:before{content:"play now";margin:auto;width:100px;height:30px;background-color:var(--maindark);text-align:center;line-height:29px;text-transform:uppercase;border-radius:4px;z-index:1;position:absolute;right:0;left:0;top:0;bottom:0}.imagwitex[_ngcontent-%COMP%]:hover:after{content:" ";position:absolute;margin:auto;width:100%;height:100%;background-color:#000000a1;text-align:center;line-height:29px;text-transform:uppercase;border-radius:4px;z-index:0;right:0;left:0;top:0;bottom:0}',
          ],
        ],
        data: {},
      });
      function Q(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              28,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              27,
              "div",
              [["class", "liveCasinoMainDiv"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              10,
              "div",
              [["class", "dummytab-wrap"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              6,
              "ul",
              [["class", "tabDummyBox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              0,
              "li",
              [["class", "active"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(5, 0, null, null, 0, "li", [], null, null, null, null, null)),
            (t()(),
            i.qb(6, 0, null, null, 0, "li", [], null, null, null, null, null)),
            (t()(),
            i.qb(7, 0, null, null, 0, "li", [], null, null, null, null, null)),
            (t()(),
            i.qb(8, 0, null, null, 0, "li", [], null, null, null, null, null)),
            (t()(),
            i.qb(9, 0, null, null, 0, "li", [], null, null, null, null, null)),
            (t()(),
            i.qb(
              10,
              0,
              null,
              null,
              2,
              "ul",
              [["class", "nav nav-pills subcategoryTab"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              11,
              0,
              null,
              null,
              1,
              "li",
              [["class", "active"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.Kb(-1, null, ["All"])),
            (t()(),
            i.qb(
              13,
              0,
              null,
              null,
              15,
              "div",
              [["class", "gameDummyBox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              14,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              15,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              16,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              17,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              18,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              19,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              20,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              21,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              22,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              23,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              24,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              25,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              26,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              27,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              28,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function Z(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              4,
              "li",
              [],
              [
                [8, "id", 0],
                [8, "value", 0],
              ],
              [[null, "click"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "click" === e &&
                    (i =
                      !1 !==
                        t.component.switchProvider(
                          t.context.$implicit.provider,
                          t.context.index
                        ) && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              3,
              "a",
              [
                ["data-toggle", "tooltip"],
                ["style", "cursor: pointer;"],
              ],
              [[8, "title", 0]],
              null,
              null,
              null,
              null
            )),
            i.Hb(512, null, p.A, p.B, [i.q, i.r, i.k, i.B]),
            i.pb(
              3,
              278528,
              null,
              0,
              p.l,
              [p.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["class", ""],
                ["srcset", ""],
                ["style", "width: auto;"],
              ],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
          ],
          function (t, e) {
            t(
              e,
              3,
              0,
              e.component.activeProvider == e.context.$implicit.provider
                ? "active"
                : ""
            );
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.ub(1, "provider", e.context.index, ""),
              i.ub(1, "", e.context.$implicit.provider, "")
            ),
              t(e, 1, 0, i.ub(1, "", e.context.$implicit.provider, "")),
              t(
                e,
                4,
                0,
                i.ub(1, "/assets/images/", e.context.$implicit.provider, ".png")
              );
          }
        );
      }
      function X(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              5,
              "li",
              [],
              [
                [8, "id", 0],
                [8, "value", 0],
              ],
              [[null, "click"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "click" === e &&
                    (i =
                      !1 !==
                        t.component.switchType(
                          t.context.$implicit,
                          t.context.index
                        ) && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              4,
              "a",
              [["style", "cursor: pointer;"]],
              null,
              null,
              null,
              null,
              null
            )),
            i.Hb(512, null, p.A, p.B, [i.q, i.r, i.k, i.B]),
            i.pb(
              3,
              278528,
              null,
              0,
              p.l,
              [p.A],
              {
                ngClass: [0, "ngClass"],
              },
              null
            ),
            (t()(), i.Kb(4, null, ["", ""])),
            i.Gb(5, 1),
          ],
          function (t, e) {
            t(
              e,
              3,
              0,
              e.component.activegameType == e.context.$implicit.type
                ? "active"
                : ""
            );
          },
          function (t, e) {
            t(
              e,
              0,
              0,
              i.ub(1, "type", e.context.index, ""),
              i.ub(1, "", e.context.$implicit.type, "")
            );
            var n = i.Lb(
              e,
              4,
              0,
              t(e, 5, 0, i.Cb(e.parent.parent, 0), e.context.$implicit.type)
            );
            t(e, 4, 0, n);
          }
        );
      }
      function tt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "col-sm-3 matos"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "imagwitex lazloadImg"]],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "click" === e &&
                    (i =
                      !1 !== t.component.openGames(t.context.$implicit) && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "img",
              [
                ["appLazyLoad", ""],
                ["class", "card-img-top fadeinweb"],
              ],
              [[1, "src", 4]],
              null,
              null,
              null,
              null
            )),
            i.pb(
              4,
              4210688,
              null,
              0,
              R.a,
              [i.B, i.k],
              {
                src: [0, "src"],
              },
              null
            ),
          ],
          function (t, e) {
            t(e, 4, 0, i.ub(1, "", e.context.$implicit.imgUrl, ""));
          },
          function (t, e) {
            t(e, 3, 0, i.Cb(e, 4).srcAttr);
          }
        );
      }
      function et(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              9,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              6,
              "div",
              [
                ["class", "liveCasinoMainDiv"],
                [
                  "style",
                  "margin-bottom: 22px;border-bottom: solid 0px var(--maindark); padding-bottom: 0px; ",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              2,
              "ul",
              [
                [
                  "class",
                  "nav nav-pills newnav-pills d2-scrollBar gameTabCasino",
                ],
                ["style", "overflow-x: auto; display: flex; padding: 10px 0;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, Z)),
            i.pb(
              4,
              278528,
              null,
              0,
              p.m,
              [i.N, i.J, i.q],
              {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"],
              },
              null
            ),
            (t()(),
            i.qb(
              5,
              0,
              null,
              null,
              2,
              "ul",
              [
                ["class", "nav nav-pills d2-scrollBar"],
                [
                  "style",
                  "overflow-x: scroll;  white-space: nowrap;display: flex;margin: 20px 0px; padding: 0 5px;",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, X)),
            i.pb(
              7,
              278528,
              null,
              0,
              p.m,
              [i.N, i.J, i.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, tt)),
            i.pb(
              9,
              278528,
              null,
              0,
              p.m,
              [i.N, i.J, i.q],
              {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"],
              },
              null
            ),
            (t()(), i.fb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 4, 0, n.intCasinoFilter, n.trackByImage),
              t(e, 7, 0, n.typeFilteronUi),
              t(e, 9, 0, n.playerLiveCasino, n.trackByEvent);
          },
          null
        );
      }
      function nt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              6,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "innerFooter"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "container maibody"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "app-live-casino-url",
              [],
              null,
              null,
              null,
              k.b,
              k.a
            )),
            i.pb(
              4,
              114688,
              null,
              0,
              _.a,
              [L.a, r.a, D.a],
              {
                providerName: [0, "providerName"],
              },
              null
            ),
            (t()(),
            i.qb(
              5,
              0,
              null,
              null,
              1,
              "app-d2-footer",
              [],
              null,
              null,
              null,
              G.b,
              G.a
            )),
            i.pb(6, 114688, null, 0, q.a, [r.a, c.p], null, null),
          ],
          function (t, e) {
            t(e, 4, 0, e.component.activegameType), t(e, 6, 0);
          },
          null
        );
      }
      function it(t) {
        return i.Mb(
          0,
          [
            i.Eb(0, p.v, []),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "livescro"],
                ["style", "padding-top: 140px; min-height: 100vh;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "headerimg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/live-casino.jpg"],
                ["srcset", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              4,
              "div",
              [["class", "container maibody"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, Q)),
            i.pb(
              6,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, et)),
            i.pb(
              8,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, nt)),
            i.pb(
              10,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              11,
              0,
              null,
              null,
              1,
              "app-low-bal-currency-info",
              [],
              null,
              [
                [null, "hideModelEvent"],
                [null, "hideNavigatelivecasinoEvent"],
                [null, "transfertoJiliCoin"],
              ],
              function (t, e, n) {
                var i = !0,
                  s = t.component;
                return (
                  "hideModelEvent" === e && (i = !1 !== s.hidemodal() && i),
                  "hideNavigatelivecasinoEvent" === e &&
                    (i = !1 !== s.hideNavigatelivecasino() && i),
                  "transfertoJiliCoin" === e &&
                    (i = !1 !== s.transfercoinToJiliGames(n) && i),
                  i
                );
              },
              B.b,
              B.a
            )),
            i.pb(
              12,
              114688,
              null,
              0,
              F.a,
              [r.a],
              {
                gameName: [0, "gameName"],
              },
              {
                hideModelEvent: "hideModelEvent",
                hideNavigatelivecasinoEvent: "hideNavigatelivecasinoEvent",
                transfertoJiliCoin: "transfertoJiliCoin",
              }
            ),
            (t()(),
            i.qb(
              13,
              0,
              null,
              null,
              1,
              "app-coming-soon",
              [],
              null,
              null,
              null,
              Y.b,
              Y.a
            )),
            i.pb(14, 114688, null, 0, V.a, [r.a], null, null),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 6, 0, 0 == n.playerLiveCasino.length),
              t(e, 8, 0, n.playerLiveCasino.length > 0),
              t(
                e,
                10,
                0,
                "D2" == n.object.themeChange.uxDesign &&
                  ("20210224" == n.object.themeChange.whitelableId ||
                    "20210217" == n.object.themeChange.whitelableId)
              ),
              t(
                e,
                12,
                0,
                null == n.casinoObject ? null : n.casinoObject.gameName
              ),
              t(e, 14, 0);
          },
          null
        );
      }
      function st(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-live-casino",
              [],
              null,
              null,
              null,
              it,
              W
            )),
            i.pb(
              1,
              245760,
              null,
              0,
              K,
              [L.a, r.a, E.a, f.a, c.p, c.a, i.h, A.b],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var lt = i.mb("app-live-casino", K, st, {}, {}, []);
      class at extends H {
        constructor(t, e, n, i, s, l) {
          super(t, e, n, i, s, l),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.firebase = i),
            (this.router = s),
            (this.senitizer = l);
        }
        ngOnInit() {
          this.loader(),
            this.object.onChangeEvents(),
            this.init(),
            this.getLiveCasinoEventList(),
            (this.object.activeWebLink =
              this.object.getConstants().PNL.SLOTGAME),
            (this.unsubscribeEventUpdate = this.broadCast
              .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
              .subscribe((t) => {
                t.booleanKeys[0].casinoUpdated && this.getLiveCasinoEventList();
              })),
            this.object.setmetaTagTitle(
              this.object.getConstants().SEOMETATAG[1]
            );
        }
        hideMultiplemodal() {
          this.object.getDOMInstance().hideModal("multipleTab"),
            this.openLivecasinoGame();
        }
        hidemodal() {
          this.object.getDOMInstance().hideModal("curencyInfo"),
            this.getGameUrl(this.gameUrl),
            this.casinoObject &&
              window.open(
                "/casino-games/wrcs/" + this.casinoObject.eventId,
                "_self"
              );
        }
        hideNavigatelivecasino() {
          this.object.getDOMInstance().hideModal("lowbalance"),
            this.router.navigate(["/casino-games/slot-games"]);
        }
        transfercoinToJiliGames(t) {
          (this.tansfercoinAmount = t),
            this.object
              .getDOMInstance()
              .hideModal(this.object.getConstants().STORAGE.COINSLIDER),
            this.object
              .getUtilInstance()
              .storeState(this.object.getConstants().STORAGE.COIN, t),
            this.openLivecasinoGame();
        }
        ngOnDestroy() {
          this.unsubscribeEventUpdate &&
            this.unsubscribeEventUpdate.unsubscribe(),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe();
        }
      }
      var ot = i.ob({
        encapsulation: 0,
        styles: [
          [
            ".headerimg[_ngcontent-%COMP%]{border-bottom:solid 2px var(--casino-color);margin-bottom:20px}.livescro[_ngcontent-%COMP%]{min-height:calc(100vh - 80px);color:#fff;background-color:#000;padding-top:170px}.livescro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.livescro[_ngcontent-%COMP%]   .maintiti[_ngcontent-%COMP%]{margin:40px 0}.imagwitex[_ngcontent-%COMP%]{position:relative;cursor:pointer}.imagwitex[_ngcontent-%COMP%]   .titbb[_ngcontent-%COMP%]{position:absolute;bottom:-10px;padding:40px 20px 30px;font-family:Oswald;text-transform:uppercase;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.88) 74.9%)}.matos[_ngcontent-%COMP%]{margin-bottom:10px;width:20%;padding:0 7px}.maibody[_ngcontent-%COMP%]{border-radius:4px}.card-img-top[_ngcontent-%COMP%]{border-radius:4px;border:solid 2px var(--maindark)}.popimgcoin[_ngcontent-%COMP%]{background-image:url(popupcoin.18a8bbb33acfc07fd651.png);background-size:105% 100%;border:2px solid #f8a300;border-radius:13px;text-align:center;color:#fff!important;background-position:-20px -20px;background-color:#1d1521!important}.bodypa[_ngcontent-%COMP%]{padding:24px 0 15px}.bodypabal[_ngcontent-%COMP%]{padding:45px 0 35px}.footermm[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center}.footermm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f8a300!important;width:102%;border-radius:0 0 10px 10px;color:#281d2e;margin:-2px -3px!important;padding:10px 0;font-size:17px;font-weight:700}.modal-dialog[_ngcontent-%COMP%]   .popimgcoin[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{border:none!important;position:absolute;right:0;z-index:999999999;border-radius:60px;margin-top:-20px;padding:0;margin-right:-19px}.mainheadinnn[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;margin:-85px 0 55px;text-transform:uppercase;font-size:70px;font-weight:700;border-bottom:solid 3px var(--maindark);padding-bottom:40px}",
          ],
        ],
        data: {},
      });
      function rt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              16,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              15,
              "div",
              [["class", "gameDummyBox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(2, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(3, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(4, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(5, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(6, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(7, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(8, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(9, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(
              10,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              11,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              12,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              13,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              14,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              15,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              16,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function ct(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-sm-3 matos"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "imagwitex"]],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "click" === e &&
                    (i =
                      !1 !== t.component.openGames(t.context.$implicit) && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [["class", "fadeinweb"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 2, 0, i.ub(1, "", e.context.$implicit.imgUrl, ""));
          }
        );
      }
      function ut(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, ct)),
            i.pb(
              2,
              278528,
              null,
              0,
              p.m,
              [i.N, i.J, i.q],
              {
                ngForOf: [0, "ngForOf"],
              },
              null
            ),
            (t()(), i.fb(0, null, null, 0)),
          ],
          function (t, e) {
            t(e, 2, 0, e.component.playerSlotBingo);
          },
          null
        );
      }
      function ht(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              4,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "app-live-casino-url",
              [],
              null,
              null,
              null,
              k.b,
              k.a
            )),
            i.pb(
              2,
              114688,
              null,
              0,
              _.a,
              [L.a, r.a, D.a],
              {
                providerName: [0, "providerName"],
              },
              null
            ),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "app-d2-footer",
              [],
              null,
              null,
              null,
              G.b,
              G.a
            )),
            i.pb(4, 114688, null, 0, q.a, [r.a, c.p], null, null),
          ],
          function (t, e) {
            t(e, 2, 0, "slots"), t(e, 4, 0);
          },
          null
        );
      }
      function gt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "livescro"],
                ["style", "padding-top: 140px;min-height: 100vh;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "headerimg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/Slot-Games-Banner.jpg"],
                ["srcset", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [["class", "container maibody"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, rt)),
            i.pb(
              5,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, ut)),
            i.pb(
              7,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              8,
              0,
              null,
              null,
              2,
              "div",
              [["class", "innerFooter"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, ht)),
            i.pb(
              10,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              11,
              0,
              null,
              null,
              1,
              "app-low-bal-currency-info",
              [],
              null,
              [
                [null, "hideModelEvent"],
                [null, "hideNavigatelivecasinoEvent"],
                [null, "transfertoJiliCoin"],
              ],
              function (t, e, n) {
                var i = !0,
                  s = t.component;
                return (
                  "hideModelEvent" === e && (i = !1 !== s.hidemodal() && i),
                  "hideNavigatelivecasinoEvent" === e &&
                    (i = !1 !== s.hideNavigatelivecasino() && i),
                  "transfertoJiliCoin" === e &&
                    (i = !1 !== s.transfercoinToJiliGames(n) && i),
                  i
                );
              },
              B.b,
              B.a
            )),
            i.pb(
              12,
              114688,
              null,
              0,
              F.a,
              [r.a],
              {
                gameName: [0, "gameName"],
              },
              {
                hideModelEvent: "hideModelEvent",
                hideNavigatelivecasinoEvent: "hideNavigatelivecasinoEvent",
                transfertoJiliCoin: "transfertoJiliCoin",
              }
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 5, 0, 0 == n.playerSlotBingo.length),
              t(e, 7, 0, n.playerSlotBingo.length > 0),
              t(
                e,
                10,
                0,
                "D2" == n.object.themeChange.uxDesign &&
                  ("20210224" == n.object.themeChange.whitelableId ||
                    "20210217" == n.object.themeChange.whitelableId)
              ),
              t(
                e,
                12,
                0,
                null == n.casinoObject ? null : n.casinoObject.gameName
              );
          },
          null
        );
      }
      function bt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-slot-game",
              [],
              null,
              null,
              null,
              gt,
              ot
            )),
            i.pb(
              1,
              245760,
              null,
              0,
              at,
              [L.a, r.a, E.a, f.a, c.p, A.b],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var dt = i.mb("app-slot-game", at, bt, {}, {}, []);
      class pt extends J.a {
        constructor(t, e) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.playervirtualSpors = []),
            (this.tansfercoinAmount = 0),
            (this.transectionCoin = "0"),
            (this.gameTypeList = []),
            (this.demoUserList = []);
        }
      }
      class mt extends pt {
        constructor(t, e, n, i, s, l) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.senitizer = l),
            this.init();
        }
        init() {
          (this.gameTypeList = Object.values(
            this.object.getConstants().VIRTUALSPORTS_GAMETYPE
          )),
            (this.demoUserList = Object.values(
              this.object.getConstants().DEMOUSER
            ));
        }
        getVirtualSportsGamesList() {
          (this.loading = !0),
            this.service
              .get(
                this.object.getURLInstance().getVirtualSportsGames,
                this.object.getURLInstance().EMPTY_PARAM,
                this.headers()
              )
              .toPromise()
              .then((t) => {
                this.loading = !1;
                var e = t.data.filter(
                  (t) =>
                    t.gameType == this.object.getConstants().PNL.VIRTUALSPORT
                );
                this.playervirtualSpors = e;
              })
              .catch((t) => {
                this.loading = !1;
              });
        }
        openGames(t, e) {
          let n,
            i = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.token);
          if (
            (i &&
              (n = this.demoUserList.some(
                (t) => t == this.object.palyerSelfInfo.userName
              )),
            (this.vsportObject = t),
            "SUSPENDED" == t.status)
          )
            return (
              (this.object.eventStatus = !0),
              void this.object
                .getDOMInstance()
                .showModal(
                  this.object.getDOMInstance().showModal("specialMarket")
                )
            );
          this.gameTypeList.some((e) => e == t.gameType)
            ? null == i || n
              ? this.disableCoinSlider(e)
              : this.object.getDOMInstance().showModal("coinslider")
            : this.disableCoinSlider(e);
          let s = {
            game_play: t.provider,
            game_type: t.gameType,
            gameplay_userid: [
              t.provider,
              this.object.getLoginInstance().state._id,
            ],
          };
          this.object.getEventlogGameClick(s),
            this.object.setUserProperties(s),
            this.object
              .getUtilInstance()
              .storeState("liveCasinoType", t.gameType);
        }
        disableCoinSlider(t) {
          this.object.getDOMInstance().hideModal("coinslider"),
            this.object.getUtilInstance().storeState("jilicoin", 0),
            (this.tansfercoinAmount = 0),
            this.openVirtualSportGames(
              "web" == t
                ? this.object.getUI_URL().user.virtualSportUrl
                : this.object.getUI_URL().user.virtualSportMobileUrl
            );
        }
        trackByEvent(t, e) {
          return e.eventId;
        }
        trackByImage(t, e) {
          return e.eventId;
        }
        openVirtualSportGames(t) {
          (this.loading = !0),
            setTimeout(() => {
              let e = this.object.getUtilInstance().getStore("liveCasinoType");
              "CI" == this.object.checkUserCurr &&
              this.demoUserList.some(
                (t) => t == this.object.palyerSelfInfo.userName
              )
                ? window.open(t + this.vsportObject.eventId, "_self")
                : ("CI" == this.object.checkUserCurr &&
                    this.object.palyerSelfInfo.liveCasinoWalletBal >= 100 &&
                    this.gameTypeList.some((t) => t == e),
                  window.open(t + this.vsportObject.eventId, "_self")),
                this.object
                  .getUtilInstance()
                  .storeState("VirtualGame", JSON.stringify(this.vsportObject));
            }, 1e3);
        }
        launchGame(t) {
          let e = this.object
            .getUtilInstance()
            .getStore(this.object.getConstants().STORAGE.token);
          (this.transectionCoin = this.object
            .getUtilInstance()
            .getStore("jilicoin")),
            (this.transectionCoin = this.transectionCoin
              ? this.transectionCoin
              : "0");
          let n = this.object.getUtilInstance().getStore("liveCasinoType");
          this.object.palyerSelfInfo
            ? this.getVSportGameUrl(t, this.transectionCoin, n)
            : setTimeout(() => {
                null == e
                  ? this.getVSportGameUrl(t, this.transectionCoin, n)
                  : this.launchGame(t);
              }, 2e3),
            (this.object.isJiliGameRunning = !0);
        }
        setRecentgame() {
          setTimeout(() => {
            let t;
            (t = JSON.parse(
              this.object.getUtilInstance().getStore("VirtualGame")
            )) &&
              this.object.setRecents(t.gameType, {
                eventId: this.gameUrl,
                eventTypeName: t.provider,
                thumbImage:
                  "https://s3.ap-south-1.amazonaws.com/assets.iceexchange.com/" +
                  (this.object.ProdEnable ? "prod" : "dev") +
                  "/dashboard/livecasino/" +
                  this.gameUrl,
              });
          }, 3e3);
        }
        getVSportGameUrl(t, e, n) {
          let i, s;
          var l;
          null ==
          this.object
            .getUtilInstance()
            .getStore(this.object.getConstants().STORAGE.token)
            ? ((this.userCurrency = "CI"),
              (l = this.headers({
                "x-game-uuid": t,
                "x-currency": this.userCurrency,
                Authorization: "",
              })))
            : ((this.userCurrency = this.object.palyerSelfInfo.currency),
              (l = this.headers({
                "x-game-uuid": t,
                "x-currency": this.userCurrency,
              }))),
            n == this.object.getConstants().PNL.VIRTUALSPORT
              ? ((i = this.object.getURLInstance().vitualSports),
                (s =
                  this.object.getConstants().PARAMSID.balance +
                  e +
                  "&" +
                  this.object.getConstants().PARAMSID.gameid +
                  t),
                (this.loading = !0),
                setTimeout(() => {
                  this.object.getUtilInstance().storeState("jilicoin", 0);
                }, 100),
                this.service
                  .get(i, s, l)
                  .toPromise()
                  .then((t) => {
                    (this.gameUrlLink =
                      this.senitizer.bypassSecurityTrustResourceUrl(
                        t.data.data
                      )),
                      setTimeout(() => {
                        (this.loading = !1),
                          this.broadCast.broadcast(
                            this.object.getConstants().BROADCASTKEY
                              .GETPLAYERINFO
                          ),
                          this.object
                            .getUtilInstance()
                            .storeState("jilicoin", 0);
                      }, 4e3);
                  })
                  .catch((t) => {
                    (this.loading = !1),
                      setTimeout(() => {
                        406 == t.status
                          ? ((this.object.isvirtualSportIframe = !1),
                            window.history.back())
                          : 422 == t.status &&
                            ((this.object.isvirtualSportIframe = !1),
                            this.router.navigate([
                              this.object.getUI_URL().user.virtualSportUrl,
                            ]));
                      }, 2e3),
                      this.setError(t);
                  }))
              : this.router.navigate(["/"]);
        }
      }
      class vt extends mt {
        constructor(t, e, n, i, s, l, a) {
          super(t, e, n, i, s, a),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.routeParam = l),
            (this.sanitizer = a);
        }
        ngOnInit() {
          this.getVirtualSportsGamesList(),
            (this.object.isvirtualSportIframe = !1),
            (this.object.isJiliGameRunning = !1);
        }
        transfercoinToJiliGames(t) {
          (this.tansfercoinAmount = t),
            this.object.getDOMInstance().hideModal("coinslider"),
            this.object.getUtilInstance().storeState("jilicoin", t),
            this.openVirtualSportGames(
              this.object.getUI_URL().user.virtualSportUrl
            );
        }
        hideNavigatelivecasino() {
          this.object.getDOMInstance().hideModal("lowbalance");
        }
      }
      var Ct = i.ob({
        encapsulation: 0,
        styles: [
          [
            '.livescro[_ngcontent-%COMP%]{min-height:calc(100vh - 80px);color:#fff;padding-top:170px;background-image:url(liveimg.472ea5aaa67ed37f632a.jpg)}.livescro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.livescro[_ngcontent-%COMP%]   .maintiti[_ngcontent-%COMP%]{margin:40px 0}.imagwitex[_ngcontent-%COMP%]{position:relative;cursor:pointer;min-height:130px}.imagwitex[_ngcontent-%COMP%]   .titbb[_ngcontent-%COMP%]{position:absolute;bottom:-10px;padding:40px 20px 30px;font-family:Oswald;text-transform:uppercase;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.88) 74.9%)}.matos[_ngcontent-%COMP%]{margin-bottom:10px;width:20%;padding:0 7px}.maibody[_ngcontent-%COMP%]{padding:0}.card-img-top[_ngcontent-%COMP%]{border-radius:4px}.popimgcoin[_ngcontent-%COMP%]{background-image:url(popupcoin.18a8bbb33acfc07fd651.png);background-size:105% 100%;border-radius:13px;text-align:center;color:#fff!important;background-position:-20px -20px;background-color:#1d1521!important;border:2px solid!important}.bodypa[_ngcontent-%COMP%]{padding:24px 0 15px}.bodypabal[_ngcontent-%COMP%]{padding:45px 0 35px}.footermm[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center}.footermm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--maindark)!important;width:102%;border-radius:0 0 10px 10px;color:#281d2e;margin:-2px -3px!important;padding:10px 0;font-size:17px;font-weight:700}.modal-dialog[_ngcontent-%COMP%]   .popimgcoin[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{border:none!important;position:absolute;right:0;z-index:999999999;border-radius:60px;margin-top:-20px;padding:0;margin-right:-19px}.mainheadinnn[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;margin:-85px 0 55px;text-transform:uppercase;font-size:medium;font-weight:700;border-bottom:solid 3px var(--maindark);padding-bottom:40px}.activeTab[_ngcontent-%COMP%], .newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent}.nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:5px 14px;margin:16px 3px;font-size:medium;color:#fff;background-color:transparent;border-radius:4px}.nav-pills[_ngcontent-%COMP%]::-webkit-scrollbar{width:2px;height:4px;position:absolute}.filter-type[_ngcontent-%COMP%]{margin-left:16px}.filter-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:16px;margin-right:8px}.filter-type[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:5px;font-weight:500;font-size:12px;line-height:16px;border-radius:4px;margin-top:2px;background:rgba(58,95,112,.1)}.filter-type[_ngcontent-%COMP%]   .dropdown-text[_ngcontent-%COMP%]{color:#000;background-color:#fff}.activeTab[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent!important;border-bottom:none!important;box-shadow:0 0 0 2px var(--maindark)!important;color:#fff}.activeProvider[_ngcontent-%COMP%]{border-bottom:none!important;background-color:transparent!important}a.active[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:0 0 0 2px var(--maindark)!important;color:#fff!important}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin:0 5px}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{border-radius:4px;padding:5px;margin:0 3px;font-size:20px;color:#fff;background-color:#000;box-shadow:0 0 0 2px #fff}.newnav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}.headerimg[_ngcontent-%COMP%]{border-bottom:solid 2px var(--casino-color);margin-bottom:20px}.headerimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .headerimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:none}.imagwitex[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--maindark);border-radius:4px}.imagwitex[_ngcontent-%COMP%]:hover:before{content:"play now";margin:auto;width:100px;height:30px;background-color:var(--maindark);text-align:center;line-height:29px;text-transform:uppercase;border-radius:4px;z-index:1;position:absolute;right:0;left:0;top:0;bottom:0}.imagwitex[_ngcontent-%COMP%]:hover:after{content:" ";position:absolute;margin:auto;width:100%;height:100%;background-color:#000000a1;text-align:center;line-height:29px;text-transform:uppercase;border-radius:4px;z-index:0;right:0;left:0;top:0;bottom:0}',
          ],
        ],
        data: {},
      });
      function It(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              16,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              15,
              "div",
              [["class", "gameDummyBox"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(2, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(3, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(4, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(5, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(6, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(7, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(8, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(9, 0, null, null, 0, "div", [], null, null, null, null, null)),
            (t()(),
            i.qb(
              10,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              11,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              12,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              13,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              14,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              15,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              16,
              0,
              null,
              null,
              0,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function yt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              3,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              2,
              "div",
              [["class", "col-sm-3 matos"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              1,
              "div",
              [["class", "imagwitex"]],
              null,
              [[null, "click"]],
              function (t, e, n) {
                var i = !0;
                return (
                  "click" === e &&
                    (i =
                      !1 !==
                        t.component.openGames(t.context.$implicit, "web") && i),
                  i
                );
              },
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              0,
              "img",
              [["class", "card-img-top fadeinweb"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 3, 0, i.ub(1, "", e.context.$implicit.imgUrl, ""));
          }
        );
      }
      function ft(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, yt)),
            i.pb(
              2,
              278528,
              null,
              0,
              p.m,
              [i.N, i.J, i.q],
              {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"],
              },
              null
            ),
            (t()(), i.fb(0, null, null, 0)),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0, n.playervirtualSpors, n.trackByEvent);
          },
          null
        );
      }
      function jt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              null,
              null,
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "app-d2-footer",
              [],
              null,
              null,
              null,
              G.b,
              G.a
            )),
            i.pb(2, 114688, null, 0, q.a, [r.a, c.p], null, null),
          ],
          function (t, e) {
            t(e, 2, 0);
          },
          null
        );
      }
      function Lt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              7,
              "div",
              [
                ["class", "livescro"],
                ["style", "padding-top: 140px; min-height: 100vh;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "headerimg"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", ""],
                ["src", "assets/images/Virtual-Sports-Banner2.png"],
                ["srcset", ""],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              4,
              "div",
              [["class", "container maibody"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), i.fb(16777216, null, null, 1, null, It)),
            i.pb(
              5,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, ft)),
            i.pb(
              7,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, jt)),
            i.pb(
              9,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              10,
              0,
              null,
              null,
              1,
              "app-low-bal-currency-info",
              [],
              null,
              [
                [null, "hideNavigatelivecasinoEvent"],
                [null, "transfertoJiliCoin"],
              ],
              function (t, e, n) {
                var i = !0,
                  s = t.component;
                return (
                  "hideNavigatelivecasinoEvent" === e &&
                    (i = !1 !== s.hideNavigatelivecasino() && i),
                  "transfertoJiliCoin" === e &&
                    (i = !1 !== s.transfercoinToJiliGames(n) && i),
                  i
                );
              },
              B.b,
              B.a
            )),
            i.pb(
              11,
              114688,
              null,
              0,
              F.a,
              [r.a],
              {
                gameName: [0, "gameName"],
              },
              {
                hideNavigatelivecasinoEvent: "hideNavigatelivecasinoEvent",
                transfertoJiliCoin: "transfertoJiliCoin",
              }
            ),
            (t()(),
            i.qb(
              12,
              0,
              null,
              null,
              1,
              "app-coming-soon",
              [],
              null,
              null,
              null,
              Y.b,
              Y.a
            )),
            i.pb(13, 114688, null, 0, V.a, [r.a], null, null),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 5, 0, 0 == n.playervirtualSpors.length),
              t(e, 7, 0, n.playervirtualSpors.length > 0),
              t(
                e,
                9,
                0,
                "D2" == n.object.themeChange.uxDesign &&
                  ("20210224" == n.object.themeChange.whitelableId ||
                    "20210217" == n.object.themeChange.whitelableId)
              ),
              t(
                e,
                11,
                0,
                null == n.vsportObject ? null : n.vsportObject.gameName
              ),
              t(e, 13, 0);
          },
          null
        );
      }
      function Et(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-virtual-sports",
              [],
              null,
              null,
              null,
              Lt,
              Ct
            )),
            i.pb(
              1,
              114688,
              null,
              0,
              vt,
              [L.a, r.a, E.a, f.a, c.p, c.a, A.b],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var At = i.mb("app-virtual-sports", vt, Et, {}, {}, []);
      class Ot extends mt {
        constructor(t, e, n, i, s, l, a) {
          super(t, e, n, i, s, l),
            (this.service = t),
            (this.object = e),
            (this.broadCast = n),
            (this.fireService = i),
            (this.router = s),
            (this.senitizer = l),
            (this.routeParam = a),
            (this.handleVisibleState = () => {
              "visible" == document.visibilityState &&
                window.name != this.object.getUtilInstance().getStore("lc") &&
                (this.object.getDOMInstance().showModal("multipleTab"),
                setTimeout(() => {
                  this.object.getDOMInstance().hideModal("multipleTab"),
                    this.router.navigate(["/"]);
                }, 5e3));
            });
        }
        ngOnInit() {
          (this.object.isvirtualSportIframe = !0),
            (this.object.activeWebLink = window.localStorage.getItem("path")),
            this.getRouteParams(),
            window.name ||
              (window.name = Math.floor(1e10 * Math.random()).toString()),
            this.object.getUtilInstance().storeState("lc", window.name),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            );
        }
        getRouteParams() {
          this.routeParam.params.subscribe((t) => {
            (this.gameUrl = t.uuId),
              this.object.onChangeEvents(),
              this.launchGame(this.gameUrl),
              this.setRecentgame(),
              (this.unsubscribeEventUpdate = this.broadCast
                .on(this.object.getConstants().BROADCASTKEY.FIREBASEEVENT)
                .subscribe((t) => {
                  t.booleanKeys[0] &&
                    t.booleanKeys[0].casinoUpdated &&
                    t.booleanKeys[0].eventId == this.gameUrl &&
                    setTimeout(() => {
                      this.checkEventStatus();
                    }, 1e3);
                }));
          });
        }
        checkEventStatus() {
          0 != this.playervirtualSpors.length &&
            (this.playervirtualSpors.forEach((t) => {
              (t.eventId != this.eventId && t.eventId != this.gameUrl) ||
                "SUSPENDED" != t.status ||
                (this.object.getDOMInstance().error("This event is suspended!"),
                (this.eventId = null),
                (this.gameUrl = null),
                this.router.navigate([""]));
            }),
            this.playervirtualSpors.some(
              (t) => t.eventId == this.eventId || t.eventId == this.gameUrl
            ) || this.router.navigate([""]));
        }
        ngOnDestroy() {
          (this.object.isvirtualSportIframe = !1),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            ),
            (this.object.isJiliGameRunning = !1),
            this.object.unsubscribFirebaseEvent &&
              this.object.unsubscribFirebaseEvent.unsubscribe(),
            this.unsubscribeEventUpdate &&
              this.unsubscribeEventUpdate.unsubscribe(),
            window.name == this.object.getUtilInstance().getStore("lc") &&
              this.object.getUtilInstance().removeState("lc"),
            this.object.getUtilInstance().getStore("liveCasinoType") &&
              this.broadCast.broadcast(
                this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
              ),
            this.object.getUtilInstance().removeState("liveCasinoType"),
            this.object.getUtilInstance().removeState("jilicoin"),
            this.object.getUtilInstance().removeState("VirtualGame");
        }
      }
      var St = i.ob({
        encapsulation: 0,
        styles: [
          [
            ".ifream[_ngcontent-%COMP%]{height:calc(95vh - 100px);width:100%;border:none}.jilisize[_ngcontent-%COMP%]{height:calc(90vh - 100px)}",
          ],
        ],
        data: {},
      });
      function Tt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "wearecasin"],
                [
                  "style",
                  "margin-top:145px; padding:20px 0; background-color:#000",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "row"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "col-lg-12"],
                ["style", "float: none; margin: 0 auto;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              0,
              "iframe",
              [["class", "ifream"]],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 4, 0, e.component.gameUrlLink);
          }
        );
      }
      function Mt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              4,
              "div",
              [
                ["class", "wearecasin"],
                [
                  "style",
                  "margin-top:64px; padding:20px 0; background-color:#000",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              3,
              "div",
              [["class", "container"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              2,
              "div",
              [["class", "row"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "col-lg-12"],
                ["style", "float: none; margin: 0 auto;"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              0,
              "iframe",
              [["class", "ifream"]],
              [[8, "src", 5]],
              null,
              null,
              null,
              null
            )),
          ],
          null,
          function (t, e) {
            t(e, 4, 0, e.component.gameUrlLink);
          }
        );
      }
      function xt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-loader",
              [],
              null,
              null,
              null,
              m.b,
              m.a
            )),
            i.pb(1, 114688, null, 0, v.a, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function wt(t) {
        return i.Mb(
          0,
          [
            (t()(), i.fb(16777216, null, null, 1, null, Tt)),
            i.pb(
              1,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(), i.fb(16777216, null, null, 1, null, Mt)),
            i.pb(
              3,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
            (t()(),
            i.qb(
              4,
              0,
              null,
              null,
              1,
              "app-multiple-window",
              [],
              null,
              null,
              null,
              C.b,
              C.a
            )),
            i.pb(5, 114688, null, 0, I.a, [], null, null),
            (t()(), i.fb(16777216, null, null, 1, null, xt)),
            i.pb(
              7,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, "D1" == n.object.themeChange.uxDesign),
              t(e, 3, 0, "D2" == n.object.themeChange.uxDesign),
              t(e, 5, 0),
              t(e, 7, 0, n.loading);
          },
          null
        );
      }
      function Pt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-virtual-sport-launcher",
              [],
              null,
              null,
              null,
              wt,
              St
            )),
            i.pb(
              1,
              245760,
              null,
              0,
              Ot,
              [L.a, r.a, E.a, f.a, c.p, A.b, c.a],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Nt = i.mb("app-virtual-sport-launcher", Ot, Pt, {}, {}, []);
      class Ut {
        constructor() {}
        ngOnInit() {}
      }
      var Rt = i.ob({
        encapsulation: 0,
        styles: [[""]],
        data: {},
      });
      function kt(t) {
        return i.Mb(0, [], null, null);
      }
      function _t(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-v-sports-game",
              [],
              null,
              null,
              null,
              kt,
              Rt
            )),
            i.pb(1, 114688, null, 0, Ut, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Dt = i.mb("app-v-sports-game", Ut, _t, {}, {}, []);
      class Gt extends J.a {
        constructor(t, e, n, i, s, l) {
          super(t, e),
            (this.service = t),
            (this.object = e),
            (this.senitizer = n),
            (this.router = i),
            (this.broadCast = s),
            (this.http = l),
            (this.transectionCoin = "0"),
            (this.jiliCoin = "0");
        }
        loadscript() {
          var t;
          t = this.object.ProdEnable
            ? "https://iceexchange.sptpub.com/bt-renderer.min.js"
            : "https://ui.invisiblesport.com/bt-renderer.min.js";
          var e = document.createElement("script");
          (e.type = "text/javascript"), (e.src = t), (e.id = "sportbook");
          var n = document.getElementById("sportbook"),
            i = document.getElementsByTagName("head")[0];
          n || i.appendChild(e);
        }
        afterLoginSportBookWeb() {}
        afterLoginSportBookMobile() {}
        getlanguage() {
          var t = this.object.getUtilInstance().getStore("language");
          "English" == t && (this.sportbooklanguage = "en-in"),
            (this.sportbooklanguage = "Hindi" == t ? "hi" : "en-in");
        }
        launchGameUrlweb() {
          this.loadscript(),
            this.betReder && this.betReder.kill(),
            this.getlanguage(),
            (this.loading = !0),
            (this.transectionCoin = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.COIN)),
            (this.jiliCoin = this.transectionCoin ? this.transectionCoin : "0");
          let t = this.object.getConstants().PARAMSID.balance + this.jiliCoin;
          this.service
            .get(this.object.getURLInstance().sportsBook, t, this.headers())
            .toPromise()
            .then((t) => {
              (this.object.checkpath = "sportsbook"),
                this.object.getUtilInstance().storeState("jilicoin", 0),
                (this.gameBTToken = t.token),
                this.betrederparseJwt(this.gameBTToken),
                setTimeout(() => {
                  (this.loading = !1),
                    this.broadCast.broadcast(
                      this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
                    ),
                    this.lauchsportbook();
                }, 1e3);
            })
            .catch((t) => {
              (this.loading = !1),
                this.setError(t),
                this.router.navigate(["/"]);
            });
        }
        lauchsportbook() {
          (this.object.getLoginInstance().getIsLogin() &&
            "demo1" != this.object.getLoginInstance().state.userName &&
            "demo2" != this.object.getLoginInstance().state.userName &&
            "demo3" != this.object.getLoginInstance().state.userName) ||
            (this.gameBTToken = ""),
            this.object.getLoginInstance().getIsLogin();
          var t =
              !!this.object.themeChange.bankingView &&
              this.object.themeChange.bankingView,
            e = 0,
            n = 0;
          "D1" == this.object.themeChange.uxDesign
            ? ((e = 148), (n = 148))
            : "D2" == this.object.themeChange.uxDesign && ((e = 65), (n = 65)),
            (this.betReder = new BTRenderer().initialize({
              brand_id: this.betRederTokenInfo.iss,
              token: this.gameBTToken,
              themeName: "demo-blue-dark-card",
              lang: this.sportbooklanguage,
              target: document.getElementById("betby"),
              betSlipOffsetTop: n,
              betSlipOffsetBottom: 0,
              betSlipOffsetRight: 0,
              betslipZIndex: 999,
              stickyTop: e,
              onTokenExpired: () =>
                new Promise((t, e) => {
                  $.ajax({
                    type: "GET",
                    url: "https://testinglobby.slotegrator.com/sportsbook/refresh-token/300",
                    success: function (e) {
                      t(e.token);
                    },
                    error: function (t) {
                      e(t);
                    },
                  });
                }),
              onLogin: function () {
                $("#login").modal();
              },
              onRegister: function () {
                t ? $("#player-signup").modal() : $("#login").modal();
              },
              onSessionRefresh: function () {
                window.location.reload();
              },
              onRecharge: function () {
                if (t) window.open("/profile/balance-overview", "_self");
                else {
                  let t = document.querySelector(".app-warning");
                  t &&
                    ((t.querySelector(".warning-msg").innerHTML =
                      "Low balance please contact with Up-Line!"),
                    t.classList.add("on"),
                    t.classList.add("show"),
                    t.classList.remove("hide"),
                    setTimeout(() => {
                      t.classList.remove("on"), t.classList.add("hide");
                    }, 3e3));
                }
              },
            }));
        }
        launchGameUrlmobile() {
          this.loadscript(),
            this.betReder && this.betReder.kill(),
            this.getlanguage(),
            (this.loading = !0),
            (this.transectionCoin = this.object
              .getUtilInstance()
              .getStore(this.object.getConstants().STORAGE.COIN)),
            (this.jiliCoin = this.transectionCoin ? this.transectionCoin : "0");
          let t = this.object.getConstants().PARAMSID.balance + this.jiliCoin;
          this.service
            .get(this.object.getURLInstance().sportsBook, t, this.headers())
            .toPromise()
            .then((t) => {
              (this.object.checkpath = "sportsbook"),
                this.object.getUtilInstance().storeState("jilicoin", 0),
                (this.gameBTToken = t.token),
                this.betrederparseJwt(this.gameBTToken),
                setTimeout(() => {
                  (this.loading = !1),
                    this.broadCast.broadcast(
                      this.object.getConstants().BROADCASTKEY.GETPLAYERINFO
                    ),
                    this.lauchsportbooMobile();
                }, 1e3);
            })
            .catch((t) => {
              (this.loading = !1),
                this.setError(t),
                this.router.navigate(["/"]);
            });
        }
        lauchsportbooMobile() {
          (this.object.getLoginInstance().getIsLogin() &&
            "demo1" != this.object.getLoginInstance().state.userName &&
            "demo2" != this.object.getLoginInstance().state.userName &&
            "demo3" != this.object.getLoginInstance().state.userName) ||
            (this.gameBTToken = "");
          var t =
              !!this.object.themeChange.bankingView &&
              this.object.themeChange.bankingView,
            e = 0,
            n = 0;
          "D1" == this.object.themeChange.uxDesign
            ? ((e = 60), (n = 60))
            : "D2" == this.object.themeChange.uxDesign && ((e = 57), (n = 57)),
            (this.betReder = new BTRenderer().initialize({
              brand_id: this.betRederTokenInfo.iss,
              token: this.gameBTToken,
              themeName: "demo-blue-dark-card",
              lang: this.sportbooklanguage,
              target: document.getElementById("betby"),
              betSlipOffsetTop: n,
              betSlipOffsetBottom: 60,
              betSlipOffsetRight: 0,
              betslipZIndex: 999,
              stickyTop: e,
              onTokenExpired: () =>
                new Promise((t, e) => {
                  $.ajax({
                    type: "GET",
                    url: "https://testinglobby.slotegrator.com/sportsbook/refresh-token/300",
                    success: function (e) {
                      t(e.token);
                    },
                    error: function (t) {
                      e(t);
                    },
                  });
                }),
              onLogin: function () {
                $("#mobile-login").modal();
              },
              onRegister: function () {
                t ? $("#player-signup").modal() : $("#login").modal();
              },
              onSessionRefresh: function () {
                window.location.reload();
              },
              onRecharge: function () {
                if (t) window.open("/myprofile/balance-overview", "_self");
                else {
                  let t = document.querySelector(".app-warning");
                  t &&
                    ((t.querySelector(".warning-msg").innerHTML =
                      "Low balance please contact with Up-Line!"),
                    t.classList.add("on"),
                    t.classList.add("show"),
                    t.classList.remove("hide"),
                    setTimeout(() => {
                      t.classList.remove("on"), t.classList.add("hide");
                    }, 3e3));
                }
              },
            }));
        }
        callDistroySportbook() {
          this.object.getUtilInstance().storeState("jilicoin", 0),
            this.betReder && this.betReder.kill(),
            this.unsubcribeLogin && this.unsubcribeLogin.unsubscribe();
        }
      }
      class qt extends Gt {
        constructor(t, e, n, i, s, l) {
          super(t, n, i, s, e, l),
            (this.service = t),
            (this.broadCast = e),
            (this.object = n),
            (this.senitizer = i),
            (this.router = s),
            (this.http = l),
            (this.handleVisibleState = () => {
              "visible" == document.visibilityState &&
                window.name != this.object.getUtilInstance().getStore("lc") &&
                (this.object.getDOMInstance().showModal("multipleTab"),
                setTimeout(() => {
                  this.object.getDOMInstance().hideModal("multipleTab"),
                    this.router.navigate(["/"]);
                }, 5e3));
            }),
            (this.object.activeWebLink =
              this.object.getConstants().PNL.SLG_SPORTSBOOK);
        }
        ngOnInit() {
          window.name ||
            (window.name = Math.floor(1e10 * Math.random()).toString()),
            this.object.getUtilInstance().storeState("lc", window.name),
            document.addEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            ),
            this.launchGameUrlweb(),
            this.afterLoginSportBookWeb(),
            (this.object.isJiliGameRunning = !0),
            this.getLanguageChange();
        }
        getLanguageChange() {
          this.unsublang = this.broadCast
            .on(this.object.getConstants().STORAGE.LANGUAGECHANGE)
            .subscribe((t) => {
              this.getlanguage(),
                setTimeout(() => {
                  this.launchGameUrlweb();
                }, 200);
            });
        }
        ngOnDestroy() {
          (this.object.isJiliGameRunning = !1),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibleState,
              !0
            ),
            window.name == this.object.getUtilInstance().getStore("lc") &&
              this.object.getUtilInstance().removeState("lc"),
            this.callDistroySportbook(),
            this.unsublang && this.unsublang.unsubscribe();
        }
      }
      var Bt = n("W2O4"),
        Ft = i.ob({
          encapsulation: 0,
          styles: [[".mainWrap[_ngcontent-%COMP%]{display:flex}"]],
          data: {},
        });
      function Yt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-loader",
              [],
              null,
              null,
              null,
              m.b,
              m.a
            )),
            i.pb(1, 114688, null, 0, v.a, [], null, null),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function Vt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              2,
              "section",
              [["class", "mainWrap"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "centerWrap sportifream"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              2,
              0,
              null,
              null,
              0,
              "div",
              [["id", "betby"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            i.qb(
              3,
              0,
              null,
              null,
              1,
              "app-multiple-window",
              [],
              null,
              null,
              null,
              C.b,
              C.a
            )),
            i.pb(4, 114688, null, 0, I.a, [], null, null),
            (t()(), i.fb(16777216, null, null, 1, null, Yt)),
            i.pb(
              6,
              16384,
              null,
              0,
              p.n,
              [i.N, i.J],
              {
                ngIf: [0, "ngIf"],
              },
              null
            ),
          ],
          function (t, e) {
            var n = e.component;
            t(e, 4, 0), t(e, 6, 0, n.loading);
          },
          null
        );
      }
      function Jt(t) {
        return i.Mb(
          0,
          [
            (t()(),
            i.qb(
              0,
              0,
              null,
              null,
              1,
              "app-sports-book",
              [],
              null,
              null,
              null,
              Vt,
              Ft
            )),
            i.pb(
              1,
              245760,
              null,
              0,
              qt,
              [L.a, E.a, r.a, A.b, c.p, Bt.e],
              null,
              null
            ),
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var zt = i.mb("app-sports-book", qt, Jt, {}, {}, []),
        Ht = n("s7LF"),
        Kt = n("3xeB"),
        Wt = n("TYxm"),
        $t = n("IheW"),
        Qt = n("0HpB");
      class Zt {}
      var Xt = n("uNbQ"),
        te = n("TSSN"),
        ee = n("TP/W");
      n.d(e, "CasinoGamesDashboardModuleNgFactory", function () {
        return ne;
      });
      var ne = i.nb(s, [], function (t) {
        return i.zb([
          i.Ab(512, i.j, i.Y, [
            [8, [l.a, d, U, lt, dt, At, Nt, Dt, zt]],
            [3, i.j],
            i.v,
          ]),
          i.Ab(4608, p.p, p.o, [i.s, [2, p.F]]),
          i.Ab(4608, Ht.C, Ht.C, []),
          i.Ab(4608, Ht.e, Ht.e, []),
          i.Ab(4608, Kt.a, Kt.a, []),
          i.Ab(4608, Wt.i, Wt.i, []),
          i.Ab(4608, Wt.k, Wt.k, [$t.c]),
          i.Ab(4608, Wt.c, Wt.c, [Wt.i, Wt.k]),
          i.Ab(1073742336, p.c, p.c, []),
          i.Ab(1073742336, c.t, c.t, [
            [2, c.y],
            [2, c.p],
          ]),
          i.Ab(1073742336, Zt, Zt, []),
          i.Ab(1073742336, Ht.B, Ht.B, []),
          i.Ab(1073742336, Ht.i, Ht.i, []),
          i.Ab(1073742336, Ht.x, Ht.x, []),
          i.Ab(1073742336, Xt.a, Xt.a, []),
          i.Ab(1073742336, Wt.j, Wt.j, []),
          i.Ab(1073742336, te.h, te.h, []),
          i.Ab(1073742336, ee.a, ee.a, []),
          i.Ab(1073742336, s, s, []),
          i.Ab(
            1024,
            c.n,
            function () {
              return [
                [
                  {
                    path: "",
                    component: u,
                    children: [
                      {
                        path: "wrcs/:uuId",
                        component: j,
                        canActivate: [Qt.a],
                      },
                      {
                        path: "live-casino",
                        component: K,
                      },
                      {
                        path: "live-casino/:id",
                        component: K,
                      },
                      {
                        path: "slot-games",
                        component: at,
                      },
                      {
                        path: "virtual-sports",
                        component: vt,
                      },
                      {
                        path: "virtual-sports/:uuId",
                        component: Ot,
                        canActivate: [Qt.a],
                      },
                      {
                        path: "virtual-sport/:uuId",
                        component: Ut,
                      },
                      {
                        path: "sportsbook",
                        component: qt,
                      },
                    ],
                  },
                ],
              ];
            },
            []
          ),
        ]);
      });
    },
  },
]);
