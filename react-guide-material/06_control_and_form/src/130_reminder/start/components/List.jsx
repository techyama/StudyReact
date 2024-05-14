

const List = ({ todosList, deleteTodo }) => {
    return (
        todosList.map((todos => {
            return (
              <>
                <div key={todos.id}>
                  <button onClick={() => deleteTodo(todos.id)}>完了</button>
                  {todos.content}
                </div>
              </>
            )
        }))
    );
};

export default List;