const arrayOfQuetionsAndOptions=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];

const question1=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which feature of OOP reduces the use of nested classes ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Abstraction
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Binding
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    Inheritance
                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Encapsulation
                    </li>
             

                </ul>

            </div>
        </div>`;


const question2 =`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Why Java is Partially OOP language ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    It allows code to be written outside classes
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    It supports usual declaration of primitive data types

                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    It does not support pointers

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    It doesn’t support all types of inheritance

                    </li>
             

                </ul>

            </div>
        </div>`;

const question3 =`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which of the following is not the utility of DBMS ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Backup
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Data Loading

                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    File organization

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Process Organization

                    </li>
             

                </ul>

            </div>
        </div>`;


const question4=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which of the following is correct according to the technology deployed by DBMS ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Pointers are used to maintain transactional integrity and consistency
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Cursors are used to maintain transactional integrity and consistency

                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    Locks are used to maintain transactional integrity and consistency

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Triggers are used to maintain transactional integrity and consistency

                    </li>
             

                </ul>

            </div>
        </div>`;

const question5=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">In a timeshare operating system, when the time slot assigned to a process is completed, the process switches from the current state to ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Suspended state
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Terminated state

                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    Ready state

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Blocked state

                    </li>
             

                </ul>

            </div>
        </div>`;

const  question6=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">The operating system maintains a ______ table that keeps track of how many frames have been allocated, how many are there, and how many are available.</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    memory
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    mapping
                    
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    page

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    frame

                    </li>
             

                </ul>

            </div>
        </div>`;

const question7=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which of the following computer networks is built on the top of another network ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    overlay network
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    prime network
                    
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    prior network

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    chief network

                    </li>
             

                </ul>

            </div>
        </div>`;

const question8=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">what is the term for an endpoint of an inter-process communication flow across a computer network ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    port
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    machine
                    
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    socket

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    pipe

                    </li>
             

                </ul>

            </div>
        </div>`;

const question9=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which data structure is needed to convert infix notation to postfix notation ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Tree
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Branch
                    
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    Stack

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Queue

                    </li>
             

                </ul>

            </div>
        </div>`;

const question10=`
<!-- Questions and Options's -div -->
        <div data-container="Container For Questions And Options">
            
            <div class="bg-gray-200 my-2 px-4 " data-question_count="question_count-1">
                <div>
                    <h2 id="qustion" class="font-semibold">Which of the following points is/are not true about Linked List data structure when it is compared with an array ?</h2>
                </div>
            </div>
        
        <!-- Options-list -->
            <div data-option="answer-options" class="flex flex-col pb-4">

                <ul data-questions="Options_for_Q-1" class="list-[upper-alpha] flex flex-col gap-2 px-4 pb-2 cursor-pointer relative left-4">

                    <!-- Option-A -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
     
                    Random access is not allowed in a typical implementation of Linked Lists
                    
                    </li>
                
                    <!-- Option-B -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    Access of elements in linked list takes less time than compared to arrays
                    
                    </li>

                    <!-- Option-C -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">
    
                    Arrays have better cache locality that can make them better in terms of performance

                    </li>

                    <!-- Option-D -->
                    <li class="w-[99%] border-gray-400 border rounded-lg p-1 hover:bg-zinc-800 hover:text-gray-200 transition-all duration-200 ease-in-out" data-question_count="q_1" onclick="questionOne(event);">

                    It is easy to insert and delete elements in Linked List

                    </li>
             

                </ul>

            </div>
        </div>`;