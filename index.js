module.exports = (process.env.NODE_ENV === 'COVERAGE') ?
    require('./coverage/groundskeeper') :
    require('./lib/groundskeeper');

/**
 *                              `,:,`
 *                           .+``````,@
 *                         `:``.+#,,,,`.:   ,''`
 *                        #``.,#,+,#,',,`@@:,:,@`
 *                       #``@,#:'#,:;;,,,`#:::,,:#
 *                .;` '##``@;#::#::;#'::,,`;:;;;;;+             :+:,.,';
 *                ::,+.,;.;,#::;;;;;'@:,,,,:;;;;;'#'           '```,,,,,#
 *                :;;;;@;'+,;,;;;+#,,,,,,,,#;;;;;;+           :````,,,,,,@
 *               #:;#;;;:;;;;;;@:,,,,,,,,,,;;;;;;;;;          +:#``,,,,,,,'
 *                #';:;;;;;;;#,,,,,,,,,,,,#;;;;''''+          '```,,,,,,,,,
 *              +,:,:;;;;;;#,,,,,,;#+,,,,';;;'''''''         :``.,,,,,,,,,:#
 *              :##';@''+#',,,,,#@  :,,,,';;'#++'''+        ````,,,,,,,,,,:,`
 *                  +,,,,,,,,,#`+@  :,,,,;;;;,,,+'.`        ``+`,,,,,,,,,,::#
 *                 ,,,,,,;,+#`      ,,,,,;;#,,#,++           #`,,,,,,,,,,,,::
 *                  ##@#;:,,;      #,,,,,;;+,:;,'            .,,,,,,,,,,,,,:,
 *                  . @+ `.,:.   `+,,;#',';+,',;#           #`,,,,,,,,,,,,,::'
 *                  `    @.,,,'+;,,:+;+;#'';'@:,            @.,,,,,,,,,,,,,,:,`
 *                  @   #`.,,,+:+,#;;;';;;;;;''@            ``,',;,,,,,,,,,,,::
 *                   :##``,,,,,,,#;;;;;;;;;;;;'''            `#+,+,,,,,,,,,,,::#
 *                   @```.,,,,,,#;;;;'#@'@#;;;;''                 #:,,,,,,,,,,:,,
 *                  '```,,,,,+,#;;;+;;.  @@@;;;''#                 :,,,,,,,,,,::;
 *                 @```,,,,,;,+;;;#,# : :@@@@;;'++                  #,,,,,,,,,,::+
 *                 #``,,,,,,+';;;;,@  @@@@@@@;;;',                  `,,,,,,,,,,:::
 *                 ;`.,,,,,#;;;;:,#  '@@@@@++;;;'.                   @,,,,,,,,,,::'@
 *                  @`,,,;+;;;;;,+,,:@@+;#;;+;;'',                    ,,,,,,,,,,:,#'
 *   ,##          @#:;#@#;;;;;;,+ .,,@@:::;#;;;'''..                  @,,,,,,,,,#::`
 *  +''''          ##::;;'';+,,#   @';;;;;;;;;''':``,,                `,,,,,,,,,,,'#:`
 * `''+++.      +;,,::;'#,#:;#,   ';;;;;;;;;;''@+:@```'##+             #,,,,,,,,:#++,
 * `''+++#       @'++',,,,,,,@   ';;;;;;;;;'''#,':,:``.;'',`,+, .+#+#:##,,,,,,,,,,:,,
 *  +++++#      `,,,,,:,,,,;:   .;';;;;''''''+,::::,```#;,````@````#``:`+,,,,,,,,,:'#
 *  @+++++       @,,,,,#,,      , #;'+''''''#:::,::;```++````#`````.`'``+,,,,,,,,',:+
 *  :'++++        `'+'`           #;,+'#,'#;::,,,,:@```.``````````+``#```:,,,,,,,,,::
 *   '++++.                       `; `@@,:::,,,,,,,.`````.``'`````@``````#,,,,,,,,,::
 *   '+++++                            `@,,,,,,,,,@`````..``@`````+``````;,,,,,,,,,::
 *   +++++#                           @``+,,,,,,,+``````,.``#`````+``````:,,,,,,,,,:'
 *   #+++++                          .:```:,,,,,'```````:.``#`````#``````+,,,,,,,,,::
 *   ,'++++                          ,`````:,,,#````````,.``#`````+``````+,,,,,,,,:@
 *    '++++.                        ,.````` #@::@##.````,.``.`````.```````:,,,,,,,#
 *    '++++#                        ::```#+.+'+`...'#,``..```;`````;``..``;',,,:@`
 *    +++++#                       . ;``#'+....````+''#`..```,`....;.........'
 *    #+++++                       +`;`#'''````````#'+;```````'#':,,@`.',...,
 *    ,+++++                         ,,'';;````````++;;,```````...   .+. :+:
 *     '++++.                     @```:'@;+````` `,+;;;#'#``````..#
 *     '++++#                     ````.#;;;@++''';';;;;#''``````..`
 *     #++++#                    ;  ```#;;;#''''''''#;;'';```````..#
 *     #+++++                    , ````++;;#'''''''''+'''''``````...
 *     .+++++                   :  ````#'##'''''''''''''''#``````...+
 *      '++++.                `'#  ````#'''';;;;;;''+###'';```````..;
 *      '+++++                   `#````:'''#;;;;;';'''''''':``````..`
 *      #++++#              #'@,```#````'''#'''''#'''''''''#``````...@
 *      ++++++             '` ``#```#`..+''''''''#''''''+'';``````...#;
 *      .++++#;,#`         +` ```;+``@..#'';''''''''''''#'''#`````...:'
 *       '+++`````.    `,#@+,`.```+#``;.,;''#'''';;'''''+''';`````....':
 *       +++@``,,`.`````````,,,.```,'`,`.'''''''''''''''+''''#`````..`'#
 *      :#++#`,,,,,`````.,,,,,,;```+``.+.@'''+''''#'''''+''''';````..`''
 *     +,;###.,,,,,,.,,,,,,,,,,,#`````.:`:'''';''''''''''''''''````..`''
 *    `,,,,,+,,,,:,,,,,,,,,,,,,,:`````.`: +'''#''''''''#''''''''```..,++.
 *    `,,,,,:,,,,,,,,,,,,,,,,,,::;```..`` '''';#;''#''+''''''''''`...@++;
 *     +,,,::@,,@,,,,,,,,,,,,,:::#``.... `;''''''###''''''''''''';#+#+++'
 *     `#'::;+::,;:;,,,,,,,,,::::+...,.,  @'''''''''''''''''''''''''+++++#
 *     +,,,,,,,,:+,,,,,,,,:::::::+..`#   .;''''''''''''''''''''''''''++++'
 *     ,,,,,,,,::;,,::::::::::,:+@..#    +'''''''''''''''''''''''''''+++++'
 *      ;:,,,:::##,:+:::,,:+@;` #;;@    ;;''''''''''''''''''''''''''''+++++
 *       #,,:,;+:,,:@+'.`               +'''''''''''''''''''''''''''''++++'
 *       ,,:::,::,,@                    ;''''''''''''''''''''''''''''''++++:
 *       ':::::::@                     :;''''''''''''''''''''''''''''''++++#
 *        +,::,:#                      @;''''''''''''''''''''''''''''''++++@
 *         `##+++,                     #;''''''''''''''''''''''''''''''++++#
 *          +++++#                     #;''''''''''''''''''''''''''''''+++++
 *          #++++#                     #;''''''''''''''''''''''''''''''++++#
 *          #+++++                     @;''''''''''''''''''''''''''''''++++@
 *          ,+++++                     ;;''''''''''''''''''''''''''''''++++;
 *           +++++,                     ;;''''''''''''''''''''''''''''++++'
 *           +++++#                     #;''''''''''''''''''''''''''''+++++
 *           #++++#                     `;''''''''''''''''''''''''''''+++++
 *           ++++++                      @;''''''''''''''''''''''''''++++'
 *           ,+++++                     ,;;''''''''''''''''''''''''''++++#
 *            +++++.                    ';'''''''''''''''''''''''''''+++'`
 *            +++++#                   @;;''''''''''''''''''''''''''+++++
 *            #++++#                  `;;'''''''''''''''''''''''''''++++#
 *            ++++++                  #;;'''''''''''+;;'''''''''''''+++'`
 *            .+++++                 `;;''''''''''''+''@..,;'''''''++++'
 *             +++++.                #;''''''''''''+++'   +''''''''++++#
 *             #++++'                ;;'''''''''''++++;  .'''''''''++++'
 *             #++++#               @;;'''''''''''++++   #'''''''''+++'`
 *             :+++++               ';'''''''''''++++.   ;''''''''++++'
 *             `+++++              .;;'''''''''''+++#   #'''''''''+++++
 *              +++++.             #;;''''''''''++++,   +'''''''''++++@
 *              #+++++             ';'''''''''''++++    ;'''''''''++++'
 *              +++++#            `;;'''''''''''+++#   ;''''''''''+++',
 *              `+++++            :;;''''''''''+++'    @''''''''''+++'
 *               +++++ .;@##@@;`  +;;''''''''''++++    +''''''''''+++'
 *               +++++:.:;'++':,  #;'''''''''''+++#    '''''''''''++++
 *            :@:+#+@,,::::::::,: ';'''''''''''+++'    '''''''''''++++
 *         .#,,',,,,,,,:::::::::# .;'''''''''''+++;    '''''''''''+++'
 *       ';.+::,,,,,,,,::::::::::  ;'''''''''''++++    +''''''''''+++'
 *     `;,#,:,:,,#,,,,,:::::::::,  ''''''''''''+++#    #''''''''''+++'`
 *     #;,,,,,,,,,:,,,,:::::::::,, @'''''''''''++++    #''''''''''++++'
 *     #,,,,,,,,,:+,,,,:::::::::,+ ;'''''''''''+++'`   .'''''''''''+++#
 *     @,:,,,,,,,:,,,,,:::::::::,#  ;'''''''''''+++#    '''''''''''++++
 *     :,,,,,,,,,,:#,,,::::::::::+  +'''''''''''++++;   @'''''''''''++'`
 *     `,,,,,,,,,,:;,,,;:::::::::'  @''''''''''''++''#  ,'''''''''''+++@
 *      :,,,,,,,,,,,,,,#:::::::::; ,'';''''''';'+#+'++   '''''''''''++++
 *      #,,,,,,,,,:,;,,@:::::::::; #';''+###+'';'+++++   #'''''''''''+++'
 *      ;,:,,,,,,,,:+,,+:::::::::' `;''''''''''''++++#   #''''''''''''++++
 *       ,,,,,,,,,,:,,,,:::::::::'  @''''''''''''++++#  ,'@';'''''''';+@++#
 *       #,,,,,,,,,,,,,,:::::::::+  `;'''''''''''+++++. @'';'+#@#@@@#+'+++'
 *       ,,:,,,,,,,,:,,,+:::::::,#  ,''''''''''''+++++# ,;'''''''''''''+++.
 *        ;,:,,,,,,,,,,,':::::::,'  +'''''''''''''++++#  @'''''''''''''+++;
 *        +,,,,,,,,,,,,,,:::::::,`  .;''''''''''''+++'+   '''''''''''''+++'`
 *         ;,,,,,,,,:,,,,:::::::,  ``:#''''''''''+'+@@@   ''''''''''''''+++@
 *         :,:,,,,,,,,,,,:::::::#';;;;'#@@#+++##@@@@@@@   ;''''''''''''''++#
 *          #,,,,,,,,,,,,,:::::#;;;;;;;;:#@@@@@@@@@@@@@+  #''''''''''''''+':
 *           ,,:,,,,,,,,,,::::@;;;;;;+@@@@@@@@@@@@@@@@@@ `;@@@#+;'''''''+@@+
 *           .,,,,,,,,,,,,::::;;;;;+@@@@@@@@@@@@@@@@@@@@+;;;;;;;;##@@@@@@@@@
 *            ',,,,,,:,,,,:::+;;;;+@@@@@@@@@@@@@@@@@@@@;;;;;;;;''';@@@@@@@@@#
 *             +,,,:,:,,,,,::@;;;;@@@@@@@@@@@@@@@@@@@@;;;;;;@@@@@@@@@@@@@@@@@
 *             '',,,,,,,,,,,,@;;;#@@@@@@@@@@@@@@@@@@@;;;;;#@@@@@@@@@@@@@@@@@@
 *               `#+:+:;:@#. @;;;@@@@@@@@@@@@@@@@@@@@;;;;#@@@@@@@@@@@@@@@@@@@
 *             ,,    ``      ;;;;@@@@@@@@@@@@@@@@ #@@;;;;@@@@@@@@@@@@@@@@@@@@
 *                            ;+;@@@@@@@@@@@@@@@  :@@;;;;@@@@@@@@@@@@@@@@@@@@
 *                               ;@@@@@@@@@@@+.     #;;;'@@@@@@@@@@@@@@@;@@@@
 *                                                   ;;;'@@@@@@@@@@@@@@ .@@.
 *                                                    #+;@@@@@@@@@@@@'
 */