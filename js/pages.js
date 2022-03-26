const pagesHtml = /* html */`
<!-- 编号页 -->
<div id="page-id" class="page hidden flex flex-col justify-center">
    <h1>自动驾驶合作实验</h1>
    <br>
    <div class="flex justify-center">
        <span class="my-auto">请输入实验编号：</span>
        <input id="id-input" type="text"
            class="w-32 h-8 px-2 py-1 text-base leading-3 border rounded-md">
    </div>
    <br>
    <span class="flex justify-center">
        注意，完成实验前请勿刷新网页，否则将丢失所有进度
    </span>
</div>
<!-- SVO测试页 -->
<div id="page-svo" class="page hidden">
    <h1>SVO测试</h1>
    <p>
        本页面将对你的社会价值取向进行测量。在这个任务中，你被随机地与另一个人配对，这个人是你不认识的人，你们将保持匿名，你所有的选择都是完全保密的。
    </p>
    <p>
        <b>你要做一系列的决定，在你和这个人之间分配资源。</b>
    </p>
    <div id="svo-table" class="w-full mt-2 bg-blue-50 text-lg">
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-0" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-1" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-2" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-3" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-4" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1 mx-2 px-3 border-2 rounded-lg border-blue-500 bg-blue-50 text-center">
            <div class="grid grid-cols-def gap-x-2">
                <div class="label whitespace-nowrap">
                    <div>你得到</div>
                    <div>TA得到</div>
                </div>
                <div id="svo-row-5" class="svo-row col-span-9 grid grid-cols-9">
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div class="selected">
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                    <div>
                        <div>85</div>
                        <div>85</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sticky top-full w-full mt-6 mb-4 flex">
        <button class="z-10 mx-auto w-32 h-10 bg-gray-300 rounded-lg" onclick="next()">下一页</button>
    </div>
</div>
<!-- 实验背景页 -->
<div id="page-back" class="page hidden">
    <h1>实验背景</h1>
    <p>
        在道路车辆高峰期，十字路口会发生直行车辆与转弯车辆拥堵现象，虽然我国交规要求转弯车辆应避让直行车辆，但仍可能发生转弯车辆会抢先行驶的情况。在这种情况下，你会选择让行，还是选择继续行驶呢？
    </p>
    <p>
        本实验中你将作为自动驾驶汽车的车主，朝十字路口方向直行，十字路口对面有一辆即将左转的自动驾驶车辆。自动驾驶汽车可以检测对方的社会价值取向（亲社会、亲自我、中立），并自行做出直行或让行的决策，你可以对该决策进行修改。需要注意的是，社会价值取向只表示对方的一种倾向，并不和其是否让行相对应，如亲社会的汽车并不总是让行。
    </p>
</div>
<!-- 实验说明页1 -->
<div id="page-info-1" class="page hidden">
    <h1>实验说明</h1>
    <p>
        本实验中，你将与左转车辆进行是否让行的博弈，实验绩效将与你的得分相关。在十字路口：
    </p>
    <p>若你选择直行，对方选择左转，则两车均无法顺利通过，各得-2分；</p>
    <p>若你选择直行，对方选择等待，则你可以顺利通过，得2分，对方得0分；</p>
    <p>若你选择等待，对方选择左转，则对方可顺利通过，你得0分，对方得2分；</p>
    <p>若你选择等待，对方选择等待，则会造成道路资源浪费，各得-1分。</p>
    <p>
        得分表如下：
    <table class="mx-auto border-collapse border-2 border-blue-500 bg-blue-50 text-center">
        <tbody>
            <tr class="bg-blue-100">
                <td class="border-2 border-blue-500 w-16"></td>
                <td class="border-2 border-blue-500 w-20">左转</td>
                <td class="border-2 border-blue-500 w-20">等待</td>
            </tr>
            <tr>
                <td class="border-2 border-blue-500 bg-blue-100">直行</td>
                <td class="border-2 border-blue-500">(-2,-2)</td>
                <td class="border-2 border-blue-500">(2,0)</td>
            </tr>
            <tr>
                <td class="border-2 border-blue-500 bg-blue-100">等待</td>
                <td class="border-2 border-blue-500">(0,2)</td>
                <td class="border-2 border-blue-500">(-1,-1)</td>
            </tr>
        </tbody>
    </table>
    </p>
</div>
<!-- 实验说明页2 -->
<div id="page-info-2" class="page hidden">
    <h1>实验说明</h1>
    <p>
        实验程序中的路况界面为你驾驶的自动驾驶汽车车内显示屏界面。为控制实验变量，实验程序中将不展示路面上的其他车辆，只保留我方直行车辆及对方左转车辆。
    </p>
    <p>
        实验共分为九个单元，每个单元实验开始前将对我方车辆和对方车辆社会价值取向类型进行说明。
    </p>
    <p>
        实验开始后，我方汽车所做决策将体现在决策框中，决策框出现时，你可对系统决策进行更改，若到达路口处未作出更改，则车辆按照系统决策行动。
    </p>
</div>
<!-- 预实验说明页 -->
<div id="page-preexp" class="page hidden">
    <h1>预实验</h1>
    <p>
        为确保大家对实验的理解，现将进行预实验，预实验默认进行五轮次，如在预实验过程中遇到不解，可返回查看实验说明直至理解实验内容，点击按钮进入预实验。
    </p>
    <button
        class="absolute left-1/2 bottom-12 transform -translate-x-40 w-20 h-10 bg-gray-300 rounded-lg"
        onclick="goto('page-back')">返回</button>
    <button id="preexp-btn"
        class="z-20 absolute left-1/2 bottom-12 transform -translate-x-1/2 w-32 h-10 bg-gray-300 rounded-lg"
        onclick="startPreExp()">预实验</button>
    <button id="skip-btn"
        class=" absolute left-1/2 bottom-12 transform translate-x-20 w-20 h-10 bg-gray-300 rounded-lg hidden"
        onclick="goto('page-exp')">跳过</button>
</div>
<!-- 正式实验说明页 -->
<div id="page-exp" class="page hidden">
    <h1>正式实验</h1>
    <p>
        如在预实验过程中遇到不解，可返回查看实验说明直至理解实验内容，点击按钮进入正式实验。
    </p>
    <button
        class="absolute left-1/2 bottom-12 transform -translate-x-40 w-20 h-10 bg-gray-300 rounded-lg"
        onclick="goto('page-back')">返回</button>
    <button id="preexp-btn"
        class="z-20 absolute left-1/2 bottom-12 transform -translate-x-1/2 w-32 h-10 bg-gray-300 rounded-lg"
        onclick="startExp()">开始实验</button>
</div>
<!-- 实验结束页 -->
<div id="page-over" class="page hidden">
    <h1>实验结束</h1>
    <h2 class="text-center mb-2">最终得分：<span id="final-score">0</span></h2>
    <h2 class="text-center">感谢您的参与！在数据发送完毕前请勿关闭网页。</h2>
    <button id="send-btn"
        class="z-30 absolute left-1/2 bottom-12 transform -translate-x-1/2 w-32 h-10 bg-gray-300 rounded-lg"
        onclick="send()">重新发送</button>
    <div id="send-msg"
        class="text-center hidden absolute left-1/2 bottom-12 transform -translate-x-1/2 w-32 h-10">
        数据发送中...</div>
</div>
`;